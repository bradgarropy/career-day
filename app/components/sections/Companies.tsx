import { Section } from "../Section";

export const Companies = () => {
  return (
    <Section id="companies">
      <h1 className="text-[10rem] font-extrabold leading-none m-0 text-center">Tech Companies</h1>

      <div className="grid grid-flow-col auto-cols-auto gap-12 items-center justify-center mt-8">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src="/images/facebook.png" alt="facebook logo" className="h-[18vh] max-w-full" />
        </a>

        <a href="https://apple.com" target="_blank" rel="noreferrer">
          <img src="/images/apple.png" alt="apple logo" className="h-[18vh] max-w-full" />
        </a>

        <a href="https://amazon.com" target="_blank" rel="noreferrer">
          <img src="/images/amazon.png" alt="amazon logo" className="h-[18vh] max-w-full" />
        </a>

        <a href="https://netflix.com" target="_blank" rel="noreferrer">
          <img src="/images/netflix.png" alt="netflix logo" className="h-[18vh] max-w-full" />
        </a>

        <a href="https://google.com" target="_blank" rel="noreferrer">
          <img src="/images/google.png" alt="google logo" className="h-[18vh] max-w-full" />
        </a>
      </div>
    </Section>
  );
};
