import { Banner } from "@cloudflare/kumo/components/banner";
import { CloudflareLogo } from "@cloudflare/kumo/components/cloudflare-logo";
import { LayerCard } from "@cloudflare/kumo/components/layer-card";
import { HeartIcon, LightningIcon, LockIcon } from "@phosphor-icons/react";
import { Section } from "../Section";

export const Cloudflare = () => {
  return (
    <Section id="cloudflare">
      <a
        href="https://cloudflare.com"
        target="_blank"
        rel="noreferrer"
        className="justify-self-center"
      >
        <CloudflareLogo variant="full" color="color" className="w-[60vw] max-w-[800px]" />
      </a>

      <div className="mt-12 w-[70vw] max-w-[900px] mx-auto">
        <Banner
          icon={<HeartIcon size={28} weight="duotone" />}
          title="Helping build a better Internet"
          description="That's our company mission."
          className="text-2xl! py-5! px-6!"
        />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-8 w-[70vw] max-w-[900px]">
        <LayerCard>
          <LayerCard.Secondary className="flex items-center gap-3">
            <LightningIcon size={32} weight="duotone" />
            <span className="text-xl font-medium">Fast</span>
          </LayerCard.Secondary>
          <LayerCard.Primary className="text-2xl font-normal">
            Websites load in a blink
          </LayerCard.Primary>
        </LayerCard>

        <LayerCard>
          <LayerCard.Secondary className="flex items-center gap-3">
            <LockIcon size={32} weight="duotone" />
            <span className="text-xl font-medium">Secure</span>
          </LayerCard.Secondary>
          <LayerCard.Primary className="text-2xl font-normal">
            Keeps the bad guys out
          </LayerCard.Primary>
        </LayerCard>
      </div>
    </Section>
  );
};
