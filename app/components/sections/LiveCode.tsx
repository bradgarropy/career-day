import { Section } from "../Section";

/**
 * 🎯 LIVE EDIT TARGET
 *
 * During the presentation, edit the values below and save.
 * Vite HMR will instantly update the page so the kids can see it change.
 *
 * Tested colors that look good on white background:
 *   #f6821f (Cloudflare orange)
 *   #003682 (Cloudflare blue)
 *   #e11d48 (red)
 *   #16a34a (green)
 *   #7c3aed (purple)
 */
const LIVE_MESSAGE = "Highland Park Bulldogs WOOF!";
const LIVE_COLOR = "#f6821f";
const LIVE_EMOJI = "👋";

export const LiveCode = () => {
  return (
    <Section id="live-code">
      <h1 className="text-[10rem] font-extrabold leading-none m-0">Watch this!</h1>

      <p className="mt-4 text-center">I'll change the code right now &mdash; watch the screen.</p>

      <div className="grid place-items-center p-16 rounded-3xl border-2 border-dashed border-current bg-white min-w-[50vw] min-h-[30vh] text-center mt-8">
        <div className="text-[6rem]">{LIVE_EMOJI}</div>
        <div className="text-5xl font-bold mt-4" style={{ color: LIVE_COLOR }}>
          {LIVE_MESSAGE}
        </div>
      </div>
    </Section>
  );
};
