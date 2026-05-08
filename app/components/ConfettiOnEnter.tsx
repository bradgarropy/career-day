import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

type ConfettiOnEnterProps = {
  /** id of the section to watch. Confetti fires when it scrolls into view. */
  sectionId: string;
};

/**
 * Fires confetti when a section scrolls into view.
 * Re-fires each time you re-enter the section.
 */
export const ConfettiOnEnter = ({ sectionId }: ConfettiOnEnterProps) => {
  const lastFiredRef = useRef<number>(0);

  useEffect(() => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const now = Date.now();
            if (now - lastFiredRef.current < 2000) continue;
            lastFiredRef.current = now;

            const colors = ["#f6821f", "#003682"];

            // Big initial blast from bottom corners (anchored at the bottom edge)
            confetti({
              particleCount: 220,
              spread: 100,
              startVelocity: 75,
              gravity: 0.85,
              ticks: 280,
              origin: { x: 0, y: 1 },
              colors,
            });
            confetti({
              particleCount: 220,
              spread: 100,
              startVelocity: 75,
              gravity: 0.85,
              ticks: 280,
              origin: { x: 1, y: 1 },
              colors,
            });

            // Center cannon shooting straight up, starting 20% from the bottom
            confetti({
              particleCount: 160,
              spread: 65,
              startVelocity: 90,
              gravity: 0.85,
              ticks: 300,
              origin: { x: 0.5, y: 0.95 },
              colors,
            });

            // Second wave: two more cannons midway up the page (fires 750ms later)
            window.setTimeout(() => {
              confetti({
                particleCount: 180,
                spread: 110,
                startVelocity: 80,
                gravity: 0.85,
                ticks: 280,
                origin: { x: 0.25, y: 0.75 },
                colors,
              });
              confetti({
                particleCount: 180,
                spread: 110,
                startVelocity: 80,
                gravity: 0.85,
                ticks: 280,
                origin: { x: 0.75, y: 0.75 },
                colors,
              });
            }, 750);
          }
        }
      },
      { threshold: [0.5] },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [sectionId]);

  return null;
};
