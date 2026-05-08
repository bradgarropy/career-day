import { ConfettiOnEnter } from "../ConfettiOnEnter";
import { Section } from "../Section";

export const Questions = () => {
  return (
    <Section id="questions">
      <ConfettiOnEnter sectionId="questions" />
      <div className="grid justify-items-center gap-8">
        <h1 className="text-[10rem] font-extrabold leading-none m-0">Questions?</h1>
        <img
          src="/images/bulldog.png"
          alt="highland park bulldog"
          className="max-h-[50vh] max-w-full"
        />
      </div>
    </Section>
  );
};
