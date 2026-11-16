export const PROGRESS_KEY = "ai-from-scratch-progress-v1";
export function loadProgress(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = JSON.parse(window.localStorage.getItem(PROGRESS_KEY) || "[]");
    return Array.isArray(stored) ? stored.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}
export function completeLesson(slug: string) {
  if (typeof window === "undefined") return;
  const completed = new Set(loadProgress());
  completed.add(slug);
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify([...completed]));
  window.dispatchEvent(new Event("ai-progress-changed"));
}
