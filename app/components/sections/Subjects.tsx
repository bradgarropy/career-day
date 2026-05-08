import { Badge } from "@cloudflare/kumo/components/badge";
import { LayerCard } from "@cloudflare/kumo/components/layer-card";
import { BooksIcon, BrainIcon, RobotIcon } from "@phosphor-icons/react";
import { Section } from "../Section";

export const Subjects = () => {
  return (
    <Section id="subjects">
      <h1 className="text-[10rem] font-extrabold leading-none m-0">Building Blocks</h1>

      <div className="mt-8 grid grid-cols-3 gap-8 w-[80vw] max-w-[1200px] mx-auto">
        <LayerCard>
          <LayerCard.Secondary className="flex items-center gap-3">
            <BooksIcon size={32} weight="duotone" />
            <span className="text-xl font-medium">Classes</span>
          </LayerCard.Secondary>
          <LayerCard.Primary className="flex flex-wrap gap-3">
            <Badge variant="outline" className="text-lg! px-4! py-1.5!">
              Math
            </Badge>
            <Badge variant="outline" className="text-lg! px-4! py-1.5!">
              Science
            </Badge>
            <Badge variant="outline" className="text-lg! px-4! py-1.5!">
              Computer Science
            </Badge>
          </LayerCard.Primary>
        </LayerCard>

        <LayerCard>
          <LayerCard.Secondary className="flex items-center gap-3">
            <RobotIcon size={32} weight="duotone" />
            <span className="text-xl font-medium">Activities</span>
          </LayerCard.Secondary>
          <LayerCard.Primary className="flex flex-wrap gap-3">
            <Badge variant="outline" className="text-lg! px-4! py-1.5!">
              Robotics
            </Badge>
            <Badge variant="outline" className="text-lg! px-4! py-1.5!">
              Coding clubs
            </Badge>
            <Badge variant="outline" className="text-lg! px-4! py-1.5!">
              Science fair
            </Badge>
          </LayerCard.Primary>
        </LayerCard>

        <LayerCard>
          <LayerCard.Secondary className="flex items-center gap-3">
            <BrainIcon size={32} weight="duotone" />
            <span className="text-xl font-medium">Skills</span>
          </LayerCard.Secondary>
          <LayerCard.Primary className="flex flex-wrap gap-3">
            <Badge variant="outline" className="text-lg! px-4! py-1.5!">
              Logical thinking
            </Badge>
            <Badge variant="outline" className="text-lg! px-4! py-1.5!">
              Problem solving
            </Badge>
            <Badge variant="outline" className="text-lg! px-4! py-1.5!">
              Curiosity
            </Badge>
          </LayerCard.Primary>
        </LayerCard>
      </div>
    </Section>
  );
};
