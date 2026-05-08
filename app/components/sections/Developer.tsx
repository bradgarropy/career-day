import { Badge } from "@cloudflare/kumo/components/badge";
import { Section } from "../Section";

export const Developer = () => {
  return (
    <Section id="developer">
      <Badge variant="beta" className="text-2xl! px-4! py-1!">
        Senior
      </Badge>

      <a
        href="https://kentcdodds.github.io/InfiniteWPM/#/"
        target="_blank"
        rel="noreferrer"
        className="inline-block relative"
      >
        <h1 className="text-[10rem] font-extrabold leading-none m-0">Software Developer</h1>
      </a>

      <div className="flex gap-4 justify-end mt-12">
        <Badge variant="outline" className="text-2xl! px-4! py-1!">
          Web
        </Badge>
        <Badge variant="outline" className="text-2xl! px-4! py-1!">
          Frontend
        </Badge>
      </div>
    </Section>
  );
};
