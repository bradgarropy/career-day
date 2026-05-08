import { useEffect } from "react";

type Props = {
  sectionIds: readonly string[];
};

/**
 * Global keyboard navigation for the deck.
 * - Arrow keys / Space scroll to next section
 * - Shift+Arrow / Shift+Space scroll to previous
 * - Home / End jump to first / last
 * - f toggles fullscreen
 * - ? toggles the presenter help overlay (handled in PresenterHelp)
 * - Esc exits fullscreen
 *
 * Also keeps the URL hash (#section-id) in sync with the current slide so
 * each slide is individually addressable. On load, scrolls to whatever
 * slide the URL points at (e.g. /#salary).
 *
 * This component renders nothing; it just attaches listeners.
 */
export const KeyboardNav = ({ sectionIds }: Props) => {
  useEffect(() => {
    const SECTION_IDS = sectionIds;
    /** The actual scrolling container is <main className="snap-y ... overflow-y-auto">. */
    const getScroller = (): HTMLElement | null => {
      const firstSection = document.getElementById(SECTION_IDS[0]);
      return (firstSection?.parentElement as HTMLElement) ?? null;
    };

    const getCurrentSectionIdx = (): number => {
      const scroller = getScroller();
      if (!scroller) return 0;
      const scrollTop = scroller.scrollTop + 1; // +1 to bias forward when right at boundary
      let bestIdx = 0;
      let bestDelta = Infinity;
      for (let i = 0; i < SECTION_IDS.length; i++) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (!el) continue;
        const top = el.offsetTop;
        const delta = Math.abs(top - scrollTop);
        if (top <= scrollTop + 50 && delta < bestDelta) {
          bestIdx = i;
          bestDelta = delta;
        }
      }
      return bestIdx;
    };

    const updateHash = (id: string) => {
      // Use replaceState so back-button doesn't accumulate every slide
      const url = `${window.location.pathname}${window.location.search}#${id}`;
      window.history.replaceState(null, "", url);
    };

    const scrollTo = (idx: number) => {
      const clamped = Math.max(0, Math.min(SECTION_IDS.length - 1, idx));
      const id = SECTION_IDS[clamped];
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
      updateHash(id);
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

    // 1. Honor URL hash on load — scroll directly to that slide
    const hash = window.location.hash.replace(/^#/, "");
    if (hash) {
      // Wait a tick for the DOM/layout to settle; scroll-snap can fight us otherwise
      window.setTimeout(() => {
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: "auto" });
      }, 0);
    }

    // 2. Update hash whenever the user scrolls (manual or via keyboard)
    const scroller = getScroller();
    let scrollDebounce: number | undefined;
    const onScroll = () => {
      window.clearTimeout(scrollDebounce);
      scrollDebounce = window.setTimeout(() => {
        const idx = getCurrentSectionIdx();
        const currentHash = window.location.hash.replace(/^#/, "");
        const newId = SECTION_IDS[idx];
        if (currentHash !== newId) updateHash(newId);
      }, 100);
    };
    scroller?.addEventListener("scroll", onScroll, { passive: true });

    // 3. Respond to back/forward buttons changing the hash
    const onHashChange = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHashChange);

    // 4. Keyboard navigation
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

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("hashchange", onHashChange);
      scroller?.removeEventListener("scroll", onScroll);
      window.clearTimeout(scrollDebounce);
    };
  }, [sectionIds]);

  return null;
};
