import { LayerCard } from "@cloudflare/kumo/components/layer-card";
import { GridFourIcon, RocketLaunchIcon, UsersThreeIcon } from "@phosphor-icons/react";
import { Section } from "../Section";

export const Dashboard = () => {
  return (
    <Section id="dashboard">
      <h1 className="text-[10rem] font-extrabold leading-none m-0">What I Build</h1>

      <div className="mt-8 w-[80vw] max-w-[1200px] mx-auto">
        <a href="/images/dashboard.png" target="_blank" rel="noreferrer">
          <img src="/images/dashboard.png" alt="Cloudflare Dashboard" className="w-full h-auto" />
        </a>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-8 w-[80vw] max-w-[1200px] mx-auto">
        <LayerCard>
          <LayerCard.Secondary className="flex items-center gap-3">
            <GridFourIcon size={32} weight="duotone" />
            <span className="text-xl font-medium">Cloudflare Dashboard</span>
          </LayerCard.Secondary>
          <LayerCard.Primary className="text-2xl font-normal">
            The control panel for websites
          </LayerCard.Primary>
        </LayerCard>

        <LayerCard>
          <LayerCard.Secondary className="flex items-center gap-3">
            <UsersThreeIcon size={32} weight="duotone" />
            <span className="text-xl font-medium">Users</span>
          </LayerCard.Secondary>
          <LayerCard.Primary className="text-2xl font-normal">Millions of people</LayerCard.Primary>
        </LayerCard>

        <LayerCard>
          <LayerCard.Secondary className="flex items-center gap-3">
            <RocketLaunchIcon size={32} weight="duotone" />
            <span className="text-xl font-medium">Coding</span>
          </LayerCard.Secondary>
          <LayerCard.Primary className="text-2xl font-normal">
            Buttons, screens, and menus
          </LayerCard.Primary>
        </LayerCard>
      </div>
    </Section>
  );
};
