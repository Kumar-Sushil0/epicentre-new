import type { Product } from "./content";
import { ALL_ACTIVITY_NAMES } from "./content";
import { activityFitsPeriod } from "./activityPeriods";

export type SlotMeta = { key: string; period: string; time: string };
export type AiPlacementSource = "cohere" | "fallback";
export type AiPlacementResult = {
  placements: { key: string; activity: string }[];
  source: AiPlacementSource;
  note?: string;
};

function summarizeAnswers(aiAnswers: Record<string, boolean>, textAnswers: { q4: string; q5: string; q6: string }): string {
  const on = Object.entries(aiAnswers)
    .filter(([, v]) => v)
    .map(([k]) => k);
  const blocks: string[] = [];
  blocks.push(on.length ? `Button selections (Q1-Q3): ${on.join("; ")}` : "Button selections (Q1-Q3): none");
  blocks.push(`Text answer Q4 (activities wanted): ${textAnswers.q4 || "(empty)"}`);
  blocks.push(`Text answer Q5 (structure preference): ${textAnswers.q5 || "(empty)"}`);
  blocks.push(`Text answer Q6 (arrival state): ${textAnswers.q6 || "(empty)"}`);
  return blocks.join("\n");
}

/**
 * Calls the Cohere-backed API (same stack as lid-playground paraphrase / voice journal).
 * On any failure, returns the heuristic fallback unchanged.
 */
export async function fetchAiScheduleOrFallback(
  fallback: { key: string; activity: string }[],
  product: Product,
  aiAnswers: Record<string, boolean>,
  textAnswers: { q4: string; q5: string; q6: string },
  slotMeta: SlotMeta[],
): Promise<AiPlacementResult> {
  if (fallback.length === 0) return { placements: fallback, source: "fallback", note: "No slots to fill." };

  const valid = new Set(ALL_ACTIVITY_NAMES);

  try {
    const res = await fetch("/api/day-designer-suggest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product: {
          id: product.id,
          name: product.name,
          cycle: product.cycle,
          days: product.days,
        },
        answersSummary: summarizeAnswers(aiAnswers, textAnswers),
        slotMeta,
        validActivities: ALL_ACTIVITY_NAMES,
      }),
    });

    const data = (await res.json()) as { activities?: string[]; error?: string; raw?: string };

    if (!res.ok || !data.activities?.length) {
      return { placements: fallback, source: "fallback", note: data.error || "AI endpoint unavailable." };
    }

    const activities = data.activities;
    if (activities.length !== fallback.length) {
      return { placements: fallback, source: "fallback", note: "AI response length mismatch." };
    }

    const placements = fallback.map((row, i) => {
      let name = activities[i]?.trim() ?? row.activity;
      if (!valid.has(name)) name = row.activity;
      const period = slotMeta[i]?.period ?? "";
      if (period && !activityFitsPeriod(name, period)) name = row.activity;
      return { key: row.key, activity: name };
    });
    return { placements, source: "cohere" };
  } catch {
    return { placements: fallback, source: "fallback", note: "AI request failed." };
  }
}
