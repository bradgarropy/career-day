import { Badge } from "@cloudflare/kumo/components/badge";
import { LayerCard } from "@cloudflare/kumo/components/layer-card";
import { GraduationCapIcon, LightbulbIcon } from "@phosphor-icons/react";
import { Section } from "../Section";

export const Education = () => {
  return (
    <Section id="education">
      <div className="grid grid-cols-1 gap-12">
        <h1 className="text-[10rem] font-extrabold leading-none m-0">Education</h1>

        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="grid gap-4">
            <LayerCard>
              <LayerCard.Secondary className="flex items-center gap-3">
                <GraduationCapIcon size={32} weight="duotone" />
                <span className="text-xl font-medium">College</span>
                <Badge variant="outline" className="ml-auto">
                  4 years
                </Badge>
              </LayerCard.Secondary>
              <LayerCard.Primary className="text-2xl font-normal">
                The University of Texas at Austin
              </LayerCard.Primary>
            </LayerCard>

            <LayerCard>
              <LayerCard.Secondary className="flex items-center gap-3">
                <LightbulbIcon size={32} weight="duotone" />
                <span className="text-xl font-medium">Major</span>
              </LayerCard.Secondary>
              <LayerCard.Primary className="text-2xl font-normal">
                Electrical Engineering
              </LayerCard.Primary>
            </LayerCard>
          </div>

          <a
            href="https://www.utexas.edu"
            target="_blank"
            rel="noreferrer"
            className="justify-self-center"
          >
            <img
              src="/images/longhorns.png"
              alt="ut longhorns logo"
              className="w-full h-auto max-w-[500px]"
            />
          </a>
        </div>
      </div>
    </Section>
  );
};
