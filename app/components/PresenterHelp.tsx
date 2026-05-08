import { useEffect, useState } from "react";

/**
 * Press "?" to toggle a help overlay listing all keyboard shortcuts.
 * Useful as a presenter aid mid-talk if you blank on the keys.
 */
export const PresenterHelp = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)
      ) {
        return;
      }

      if (e.key === "?") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!open) return null;

  const kbdClass =
    "inline-block px-2 py-1 border border-white rounded-md font-mono text-base mx-1 bg-white/10";

  return (
    <div
      className="fixed inset-0 bg-black/85 text-white grid place-content-center z-[100] p-16"
      onClick={() => setOpen(false)}
    >
      <table className="text-2xl border-separate border-spacing-4">
        <tbody>
          <tr>
            <td>
              <kbd className={kbdClass}>→</kbd>
              <kbd className={kbdClass}>↓</kbd>
              <kbd className={kbdClass}>Space</kbd>
            </td>
            <td>Next slide</td>
          </tr>
          <tr>
            <td>
              <kbd className={kbdClass}>←</kbd>
              <kbd className={kbdClass}>↑</kbd>
              <kbd className={kbdClass}>Shift+Space</kbd>
            </td>
            <td>Previous slide</td>
          </tr>
          <tr>
            <td>
              <kbd className={kbdClass}>Home</kbd>
            </td>
            <td>First slide</td>
          </tr>
          <tr>
            <td>
              <kbd className={kbdClass}>End</kbd>
            </td>
            <td>Last slide</td>
          </tr>
          <tr>
            <td>
              <kbd className={kbdClass}>f</kbd>
            </td>
            <td>Fullscreen</td>
          </tr>
          <tr>
            <td>
              <kbd className={kbdClass}>?</kbd>
            </td>
            <td>This help</td>
          </tr>
          <tr>
            <td>
              <kbd className={kbdClass}>Esc</kbd>
            </td>
            <td>Close / exit fullscreen</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-8 opacity-70 text-center">Click anywhere to dismiss</p>
    </div>
  );
};
