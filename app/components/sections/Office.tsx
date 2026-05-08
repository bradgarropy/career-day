import { Button } from "@cloudflare/kumo/components/button";
import { ArrowsClockwiseIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Section } from "../Section";

const VIEWS = [
  {
    desk: { src: "/images/desk.jpg", alt: "home office desk" },
    office: { src: "/images/office.jpeg", alt: "office" },
  },
  {
    desk: { src: "/images/desk-juju.jpeg", alt: "home office desk with juju" },
    office: { src: "/images/office-kids.jpeg", alt: "office with kids" },
  },
] as const;

export const Office = () => {
  const [viewIdx, setViewIdx] = useState(0);
  const view = VIEWS[viewIdx];
  const swap = () => setViewIdx((idx) => (idx + 1) % VIEWS.length);

  return (
    <Section id="office">
      <h1 className="text-[10rem] font-extrabold leading-none m-0 text-center">Office</h1>

      <div className="mt-12 grid grid-cols-2 gap-12 items-stretch w-full">
        <a href={view.desk.src} target="_blank" rel="noreferrer" className="block h-[50vh]">
          <img
            src={view.desk.src}
            alt={view.desk.alt}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </a>

        <a href={view.office.src} target="_blank" rel="noreferrer" className="block h-[50vh]">
          <img
            src={view.office.src}
            alt={view.office.alt}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </a>
      </div>

      <div className="mt-8 flex justify-center">
        <Button onClick={swap} variant="ghost" icon={ArrowsClockwiseIcon}>
          See more
        </Button>
      </div>
    </Section>
  );
};
