import { CodeHighlighted } from "@cloudflare/kumo/code";
import { Section } from "../Section";
import { MAGIC_8_BALL_PROMPT } from "../../lib/prompts";

export const AIDemo = () => {
  return (
    <Section id="ai-demo">
      <h2 className="text-[5rem] font-bold leading-tight m-0 text-center">
        Let's build a Magic 8 Ball 🎱
      </h2>

      <div className="mt-8 w-[65vw] max-w-[1100px] mx-auto [&_pre]:whitespace-pre-wrap [&_pre]:overflow-x-hidden [&_code]:whitespace-pre-wrap">
        <CodeHighlighted code={MAGIC_8_BALL_PROMPT} lang="markdown" showCopyButton />
      </div>

      <div className="mt-8 text-center">
        <a
          href="/2026/demo"
          className="inline-block px-10 py-4 bg-black text-white rounded-xl font-bold text-2xl no-underline"
        >
          Try it now! →
        </a>
      </div>
    </Section>
  );
};
