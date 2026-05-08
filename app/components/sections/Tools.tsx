import { Section } from "../Section";

export const Tools = () => {
  return (
    <Section id="tools">
      <h1 className="text-[10rem] font-extrabold leading-none m-0 text-center">My Toolbox</h1>

      <div className="mt-12 grid grid-cols-2 gap-12 items-start w-full">
        <div className="grid place-items-center gap-4">
          <a href="/images/vscode-2026.png" target="_blank" rel="noreferrer">
            <img src="/images/vscode-2026.png" alt="vscode screenshot" className="w-full h-auto" />
          </a>
          <a href="https://code.visualstudio.com" target="_blank" rel="noreferrer">
            <img src="/images/vscode-logo.png" alt="vscode logo" className="h-[8vh] w-auto" />
          </a>
        </div>

        <div className="grid place-items-center gap-4">
          <a href="/images/opencode.png" target="_blank" rel="noreferrer">
            <img src="/images/opencode.png" alt="opencode screenshot" className="w-full h-auto" />
          </a>
          <a href="https://opencode.ai" target="_blank" rel="noreferrer">
            <img src="/images/opencode-logo.png" alt="opencode logo" className="h-[8vh] w-auto" />
          </a>
        </div>
      </div>
    </Section>
  );
};
