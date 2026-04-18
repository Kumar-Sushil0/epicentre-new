import { NextResponse } from "next/server";
import { ACTIVITY_PERIOD } from "@/app/thesilentclub/daydesigner/activityPeriods";

/** Same Cohere chat stack as lid-playground `src/app/api/paraphrase/route.ts` and voice-journal paraphrase. */

type SlotMeta = { key: string; period: string; time: string };

type Body = {
  product?: { id: string; name: string; cycle: string; days: number };
  answersSummary?: string;
  slotMeta?: SlotMeta[];
  validActivities?: string[];
};

function parseActivitiesJson(text: string): string[] | null {
  const t = text
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "");
  try {
    const obj = JSON.parse(t) as unknown;
    if (Array.isArray(obj)) return obj.map((x) => String(x).trim());
    if (obj && typeof obj === "object" && obj !== null && "activities" in obj) {
      const a = (obj as { activities: unknown }).activities;
      if (Array.isArray(a)) return a.map((x) => String(x).trim());
    }
  } catch {
    /* ignore */
  }
  return null;
}

function periodRulesBlock(): string {
  const lines: string[] = [];
  for (const [act, periods] of Object.entries(ACTIVITY_PERIOD)) {
    lines.push(`- ${act}: only in ${periods.join(", ")}`);
  }
  return lines.join("\n");
}

export async function POST(req: Request) {
  const cohereApiKey = process.env.COHERE_API_KEY;
  if (!cohereApiKey) {
    return NextResponse.json(
      { error: "Set COHERE_API_KEY to enable AI schedule suggestions (same as lid-playground paraphrase)." },
      { status: 503 },
    );
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { product, answersSummary, slotMeta, validActivities } = body;
  if (!slotMeta?.length || !validActivities?.length) {
    return NextResponse.json({ error: "slotMeta and validActivities are required." }, { status: 400 });
  }

  const n = slotMeta.length;
  const slotLines = slotMeta
    .map((s, i) => `${i + 1}. key=${s.key} | ${s.time} | period=${s.period}`)
    .join("\n");

  const message = `You are planning a personal schedule for a silent retreat stay at The Silent Club (India).

Stay: ${product?.name ?? "Stay"} — ${product?.cycle ?? ""} — ${product?.days ?? "?"} day(s).

Guest questionnaire (toggles they selected):
${answersSummary || "(none)"}

You must assign exactly ONE activity from the allowed list to each slot below, in order (slot 1 gets activities[0], etc.).

Allowed activity names (copy strings EXACTLY — spelling and punctuation):
${validActivities.join(", ")}

Time-of-day rules (do not assign an activity to a slot period where it is invalid):
${periodRulesBlock()}

Slots in order (${n} total):
${slotLines}

Respond with ONLY valid JSON and no other text, in this exact shape:
{"activities":["ActivityName1","ActivityName2",...]}
The "activities" array MUST have exactly ${n} strings.`;

  try {
    const cohereResponse = await fetch("https://api.cohere.com/v1/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cohereApiKey}`,
      },
      body: JSON.stringify({
        model: "command-r-08-2024",
        message,
        max_tokens: 2000,
        temperature: 0.35,
      }),
    });

    const data = (await cohereResponse.json()) as { text?: string; message?: string; error?: string };

    if (!cohereResponse.ok) {
      return NextResponse.json(
        {
          error: data?.message || data?.error || "Cohere request failed.",
        },
        { status: 502 },
      );
    }

    const raw = data?.text?.toString().trim() ?? "";
    const activities = parseActivitiesJson(raw);

    if (!activities || activities.length !== n) {
      return NextResponse.json(
        {
          error: "Model did not return a valid activities array of the required length.",
          raw,
        },
        { status: 422 },
      );
    }

    return NextResponse.json({ activities });
  } catch {
    return NextResponse.json({ error: "Unexpected error calling Cohere." }, { status: 500 });
  }
}
