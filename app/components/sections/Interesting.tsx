import { Section } from "../Section";

export const Interesting = () => {
  return (
    <Section id="interesting">
      <h1 className="text-[10rem] font-extrabold leading-none m-0 text-center">Interesting</h1>

      <div className="grid grid-flow-col auto-cols-auto gap-16 items-center justify-center mt-8">
        <a href="https://compressed.fm" target="_blank" rel="noreferrer">
          <img
            src="/images/compressed.png"
            alt="compressed.fm logo"
            className="max-h-[12vh] max-w-full"
          />
        </a>

        <a href="https://bradgarropy.com" target="_blank" rel="noreferrer">
          <img src="/images/bg.png" alt="bg logo" className="max-h-[12vh] max-w-full" />
        </a>

        <a href="https://youtube.com/bradgarropy" target="_blank" rel="noreferrer">
          <img src="/images/youtube.png" alt="youtube logo" className="max-h-[12vh] max-w-full" />
        </a>
      </div>
    </Section>
  );
};
