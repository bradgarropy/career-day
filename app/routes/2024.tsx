import type { Route } from "./+types/2024";
import { KeyboardNav } from "../components/KeyboardNav";
import { PresenterHelp } from "../components/PresenterHelp";

const SECTION_IDS_2024 = [
  "developer",
  "companies",
  "education",
  "subjects",
  "office",
  "description",
  "salary",
  "interesting",
  "demo",
  "minecraft",
  "questions",
] as const;

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Career Day 2024" },
    { name: "description", content: "Career day presentation 2024 — Highland Park Elementary" },
  ];
}

const sectionBase = "relative grid h-screen w-full place-content-center p-12 snap-start";
const oddSection = `${sectionBase} bg-hpes-orange text-black`;
const evenSection = `${sectionBase} bg-hpes-blue text-white`;
const headingClass = "text-[10rem] font-bold";
const textClass = "text-[2rem]";
const linkClass = "text-[2rem]";
const imgBase = "max-w-full max-h-full";

export default function Route2024() {
  return (
    <>
      <KeyboardNav sectionIds={SECTION_IDS_2024} />
      <PresenterHelp />
      <main className="h-screen overflow-y-auto snap-y snap-mandatory">
        {/* 1. developer (odd / orange) */}
        <section id="developer" className={oddSection}>
          <a href="https://kentcdodds.github.io/InfiniteWPM/#/" target="_blank" rel="noreferrer">
            <h1 className={headingClass}>Developer</h1>
          </a>

          <div className="grid grid-cols-[auto_40vw] items-center gap-x-8">
            <div>
              <p className={textClass}>Web developer</p>
              <p className={textClass}>Software engineer</p>
            </div>

            <a href="https://atlassian.com" target="_blank" rel="noreferrer">
              <img src="/images/atlassian.png" alt="atlassian logo" className={imgBase} />
            </a>
          </div>
        </section>

        {/* 2. companies (even / blue) */}
        <section id="companies" className={evenSection}>
          <h1 className={headingClass}>Companies</h1>

          <div className="grid grid-cols-3 items-baseline gap-x-8 [&_img]:h-[20vh]">
            <a href="https://microsoft.com" target="_blank" rel="noreferrer">
              <img src="/images/microsoft.png" alt="microsoft logo" />
            </a>

            <a href="https://google.com" target="_blank" rel="noreferrer">
              <img src="/images/google.png" alt="google logo" />
            </a>

            <a href="https://apple.com" target="_blank" rel="noreferrer">
              <img src="/images/apple-white.png" alt="apple logo" />
            </a>
          </div>
        </section>

        {/* 3. education (odd / orange) */}
        <section id="education" className={oddSection}>
          <h1 className={headingClass}>Education</h1>

          <div className="grid grid-cols-[auto_40vw] items-center gap-x-8">
            <div className="grid grid-cols-2 justify-start gap-x-4 [&>p:nth-child(odd)]:font-bold">
              <p className={textClass}>College</p>
              <p className={textClass}>4 years</p>
              <p className={textClass}>Bootcamp</p>
              <p className={textClass}>12-16 weeks</p>
            </div>

            <a href="https://www.utexas.edu" target="_blank" rel="noreferrer">
              <img src="/images/longhorns.png" alt="ut logo" className={imgBase} />
            </a>
          </div>
        </section>

        {/* 4. subjects (even / blue) */}
        <section id="subjects" className={evenSection}>
          <h1 className={headingClass}>Subjects</h1>
          <p className={textClass}>Math & science</p>
          <p className={textClass}>Anything with logical or critical thinking</p>
        </section>

        {/* 5. office (odd / orange) */}
        <section id="office" className={oddSection}>
          <h1 className={headingClass}>Office</h1>

          <div className="grid grid-cols-[auto_40vw] items-center gap-x-8">
            <div>
              <p className={textClass}>Work from home</p>
              <p className={textClass}>9AM - 4PM</p>
              <p className={textClass}>On call</p>
            </div>

            <a href="/images/desk.jpg" target="_blank" rel="noreferrer">
              <img
                src="/images/desk.jpg"
                alt="desk setup"
                className={`${imgBase} rounded-2xl border-[3px] border-current shadow-[3px_3px_0_currentColor]`}
              />
            </a>
          </div>
        </section>

        {/* 6. description (even / blue) */}
        <section id="description" className={evenSection}>
          <h1 className={headingClass}>Daily work</h1>

          <div className="grid grid-cols-[auto_40vw] items-center gap-x-8">
            <div>
              <p className={textClass}>Write and review code</p>
              <p className={textClass}>Break down problems</p>
              <p className={textClass}>Create design documents</p>
              <p className={textClass}>Meetings</p>
            </div>

            <a href="/images/vscode-2024.png" target="_blank" rel="noreferrer">
              <img src="/images/vscode-2024.png" alt="vscode setup" className={imgBase} />
            </a>
          </div>
        </section>

        {/* 7. salary (odd / orange) */}
        <section id="salary" className={oddSection}>
          <h1 className={headingClass}>Salary</h1>

          <div className="grid grid-cols-[auto_1fr_auto] place-items-center gap-x-8">
            <p className={textClass}>$100,000</p>
            <div className="h-10 w-[40vw] rounded-lg border-[3px] border-current" />
            <p className={textClass}>$250,000</p>
          </div>
        </section>

        {/* 8. interesting (even / blue) */}
        <section id="interesting" className={evenSection}>
          <h1 className={headingClass}>Interesting</h1>

          <div className="mt-8 grid grid-cols-[repeat(3,auto)] items-center justify-start gap-16 [&_img]:max-h-[12vh] [&>a:first-of-type]:relative [&>a:first-of-type]:-top-8 [&>a:first-of-type]:-right-4">
            <a href="https://compressed.fm" target="_blank" rel="noreferrer">
              <img src="/images/compressed.png" alt="compressed.fm logo" />
            </a>

            <a href="https://bradgarropy.com" target="_blank" rel="noreferrer">
              <img src="/images/bg.png" alt="bg logo" />
            </a>

            <a href="https://youtube.com/bradgarropy" target="_blank" rel="noreferrer">
              <img src="/images/youtube.png" alt="youtube logo" />
            </a>
          </div>
        </section>

        {/* 9. demo (odd / orange) */}
        <section id="demo" className={oddSection}>
          <h1 className={headingClass}>Demonstration</h1>
          <p className={textClass}>Minecraft</p>
          <p className={textClass}>Website code</p>

          <a href="https://monkeytype.com" target="_blank" rel="noreferrer" className={linkClass}>
            Typing test
          </a>
        </section>

        {/* 10. minecraft (even / blue) */}
        <section id="minecraft" className={evenSection}>
          <img
            src="/images/minecraft.png"
            alt="minecraft screenshot"
            className="max-w-full max-h-[calc(100vh-6rem)]"
          />
        </section>

        {/* 11. questions (odd / orange) */}
        <section id="questions" className={oddSection}>
          <div className="grid justify-items-center">
            <h1 className={headingClass}>Questions</h1>
            <img src="/images/bulldog.png" alt="highland park bulldog" className={imgBase} />
          </div>
        </section>
      </main>
    </>
  );
}
