/**
 * Ordered registry of section ids for the deck.
 * Used by KeyboardNav to navigate prev/next via element ids.
 */
export const SECTION_IDS = [
  "developer",
  "companies",
  "cloudflare",
  "dashboard",
  "tools",
  "office",
  "education",
  "subjects",
  "salary",
  "interesting",
  "live-code",
  "ai-magic",
  "ai-demo",
  "questions",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const getNextSection = (current: SectionId): SectionId | null => {
  const idx = SECTION_IDS.indexOf(current);
  if (idx === -1 || idx === SECTION_IDS.length - 1) return null;
  return SECTION_IDS[idx + 1];
};

export const getPrevSection = (current: SectionId): SectionId | null => {
  const idx = SECTION_IDS.indexOf(current);
  if (idx <= 0) return null;
  return SECTION_IDS[idx - 1];
};
