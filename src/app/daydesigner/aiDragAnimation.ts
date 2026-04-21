import { CATS } from "./content";

/** Total time for the ghost to travel from palette to slot (ms). */
const FLIGHT_MS = 620;
/** Let scroll/layout settle before measuring (ms). */
const SCROLL_SETTLE_MS = 240;
/** Snappier easing used before slowdown change. */
const FLIGHT_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

export function getActivityMetaForDrag(activity: string): { icon: string; color: string } {
  for (const cat of Object.values(CATS)) {
    const item = cat.items.find((i) => i.name === activity);
    if (item) return { icon: item.icon, color: cat.color };
  }
  return { icon: "circle", color: "#c5a065" };
}

function escapeHtml(s: string): string {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function waitLayout(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

function findPillEl(activity: string): HTMLElement | null {
  const nodes = document.querySelectorAll<HTMLElement>("[data-ai-pill]");
  for (const el of nodes) {
    if (el.getAttribute("data-ai-pill") === activity) return el;
  }
  return null;
}

function findSlotEl(slotKey: string): HTMLElement | null {
  const nodes = document.querySelectorAll<HTMLElement>("[data-ai-slot]");
  for (const el of nodes) {
    if (el.getAttribute("data-ai-slot") === slotKey) return el;
  }
  return null;
}

/**
 * Animates a ghost chip from the palette pill to the schedule arrow slot (DOM positions).
 */
export async function runAiDragGhostAnimation(activity: string, slotKey: string): Promise<void> {
  await waitLayout();

  let pill = findPillEl(activity);
  let slot = findSlotEl(slotKey);
  if (!pill || !slot) {
    await new Promise((r) => setTimeout(r, 120));
    return;
  }

  pill.scrollIntoView({ behavior: "auto", block: "nearest", inline: "nearest" });
  slot.scrollIntoView({ behavior: "auto", block: "nearest", inline: "nearest" });
  await new Promise((r) => setTimeout(r, SCROLL_SETTLE_MS));

  pill = findPillEl(activity);
  slot = findSlotEl(slotKey);
  if (!pill || !slot) return;

  const r1 = pill.getBoundingClientRect();
  const r2 = slot.getBoundingClientRect();
  const sx = r1.left + r1.width / 2;
  const sy = r1.top + r1.height / 2;
  const ex = r2.left + r2.width / 2;
  const ey = r2.top + r2.height / 2;
  const dx = ex - sx;
  const dy = ey - sy;

  const meta = getActivityMetaForDrag(activity);
  const ghost = document.createElement("div");
  ghost.className = "ai-drag-ghost";
  ghost.style.setProperty("--ghost-accent", meta.color);
  ghost.innerHTML = `<span class="material-symbols-outlined ai-drag-ghost-ic">${meta.icon}</span><span class="ai-drag-ghost-txt">${escapeHtml(activity)}</span>`;

  document.body.appendChild(ghost);
  ghost.style.left = `${sx}px`;
  ghost.style.top = `${sy}px`;
  ghost.style.transform = "translate(-50%, -50%) scale(0.94)";
  ghost.style.transition = "none";

  void ghost.offsetWidth;

  const flight = `${FLIGHT_MS}ms ${FLIGHT_EASING}`;

  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      ghost.style.transition = `transform ${flight}, opacity ${flight}, box-shadow ${flight}`;
      ghost.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1)`;
      const finish = () => resolve();
      ghost.addEventListener("transitionend", finish, { once: true });
      window.setTimeout(finish, FLIGHT_MS + 180);
    });
  });

  ghost.remove();
}

/**
 * Animates the same ghost style from one schedule slot’s center to another (move / swap preview).
 */
export async function runGhostBetweenSlots(fromKey: string, toKey: string, activityLabel: string): Promise<void> {
  await waitLayout();

  let fromEl = findSlotEl(fromKey);
  let toEl = findSlotEl(toKey);
  if (!fromEl || !toEl) {
    await new Promise((r) => setTimeout(r, 120));
    return;
  }

  fromEl.scrollIntoView({ behavior: "auto", block: "nearest", inline: "nearest" });
  toEl.scrollIntoView({ behavior: "auto", block: "nearest", inline: "nearest" });
  await new Promise((r) => setTimeout(r, SCROLL_SETTLE_MS));

  fromEl = findSlotEl(fromKey);
  toEl = findSlotEl(toKey);
  if (!fromEl || !toEl) return;

  const r1 = fromEl.getBoundingClientRect();
  const r2 = toEl.getBoundingClientRect();
  const sx = r1.left + r1.width / 2;
  const sy = r1.top + r1.height / 2;
  const ex = r2.left + r2.width / 2;
  const ey = r2.top + r2.height / 2;
  const dx = ex - sx;
  const dy = ey - sy;

  const meta = getActivityMetaForDrag(activityLabel);
  const ghost = document.createElement("div");
  ghost.className = "ai-drag-ghost";
  ghost.style.setProperty("--ghost-accent", meta.color);
  ghost.innerHTML = `<span class="material-symbols-outlined ai-drag-ghost-ic">${meta.icon}</span><span class="ai-drag-ghost-txt">${escapeHtml(activityLabel)}</span>`;

  document.body.appendChild(ghost);
  ghost.style.left = `${sx}px`;
  ghost.style.top = `${sy}px`;
  ghost.style.transform = "translate(-50%, -50%) scale(0.94)";
  ghost.style.transition = "none";

  void ghost.offsetWidth;

  const flight = `${FLIGHT_MS}ms ${FLIGHT_EASING}`;

  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      ghost.style.transition = `transform ${flight}, opacity ${flight}, box-shadow ${flight}`;
      ghost.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1)`;
      const finish = () => resolve();
      ghost.addEventListener("transitionend", finish, { once: true });
      window.setTimeout(finish, FLIGHT_MS + 180);
    });
  });

  ghost.remove();
}
