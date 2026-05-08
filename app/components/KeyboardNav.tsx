import { useEffect } from "react";
import { SECTION_IDS } from "../lib/sections";

/**
 * Global keyboard navigation for the deck.
 * - Arrow keys / Space scroll to next section
 * - Shift+Arrow / Shift+Space scroll to previous
 * - Home / End jump to first / last
 * - f toggles fullscreen
 * - ? toggles the presenter help overlay (handled in PresenterHelp)
 * - Esc exits fullscreen
 *
 * This component renders nothing; it just attaches listeners.
 */
export const KeyboardNav = () => {
  useEffect(() => {
    const getCurrentSectionIdx = (): number => {
      // Find the section nearest to the top of the viewport.
      const scrollY = window.scrollY + 1; // +1 to bias forward when right at boundary
      let bestIdx = 0;
      let bestDelta = Infinity;
      for (let i = 0; i < SECTION_IDS.length; i++) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const delta = Math.abs(top - scrollY + 1);
        if (top <= scrollY + 50 && delta < bestDelta) {
          bestIdx = i;
          bestDelta = delta;
        }
      }
      return bestIdx;
    };

    const scrollTo = (idx: number) => {
      const clamped = Math.max(0, Math.min(SECTION_IDS.length - 1, idx));
      const el = document.getElementById(SECTION_IDS[clamped]);
      el?.scrollIntoView({ behavior: "smooth" });
    };

    const next = () => scrollTo(getCurrentSectionIdx() + 1);
    const prev = () => scrollTo(getCurrentSectionIdx() - 1);

    const toggleFullscreen = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      // Ignore when typing in inputs
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)
      ) {
        return;
      }

      switch (e.key) {
        case "ArrowDown":
        case "ArrowRight":
        case "PageDown":
          e.preventDefault();
          next();
          break;
        case "ArrowUp":
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          prev();
          break;
        case " ":
          e.preventDefault();
          if (e.shiftKey) prev();
          else next();
          break;
        case "Home":
          e.preventDefault();
          scrollTo(0);
          break;
        case "End":
          e.preventDefault();
          scrollTo(SECTION_IDS.length - 1);
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return null;
};
