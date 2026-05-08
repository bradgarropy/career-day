import type { FC } from "react";

type PlaceholderImageProps = {
  /** What goes here? E.g. "Your face, smiling" */
  description: string;
  /** Where the real image will live, e.g. "/images/face.png" */
  expectedPath?: string;
  /**
   * Extra Tailwind classes for sizing (e.g. "w-full h-[40vh]").
   * If omitted, defaults to a sensible 30vh-tall placeholder.
   */
  className?: string;
};

/**
 * Placeholder for images you'll swap in later.
 * Renders an obviously-styled box with the description so you can spot it.
 *
 * Search your codebase for `PlaceholderImage` to find every spot.
 */
export const PlaceholderImage: FC<PlaceholderImageProps> = ({
  description,
  expectedPath,
  className,
}) => {
  return (
    <div
      className={`grid place-content-center text-center p-4 border-[3px] border-dashed border-current rounded-2xl bg-white/60 opacity-85 font-mono w-full h-[30vh] ${className ?? ""}`.trim()}
    >
      <div className="text-3xl">📷</div>
      <div className="text-xl font-bold mt-2">{description}</div>
      {expectedPath && <div className="text-sm mt-2 opacity-60">{expectedPath}</div>}
    </div>
  );
};
