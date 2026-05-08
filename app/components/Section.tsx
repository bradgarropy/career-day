import type { FC, ReactNode } from "react";
import type { SectionId } from "../lib/sections";

type SectionProps = {
  id: SectionId;
  children: ReactNode;
  className?: string;
};

export const Section: FC<SectionProps> = ({ id, children, className }) => {
  return (
    <section
      id={id}
      className={`w-full h-screen grid place-content-center relative p-12 snap-start [scroll-snap-stop:always] bg-white text-black text-3xl ${className ?? ""}`.trim()}
    >
      {children}
    </section>
  );
};
