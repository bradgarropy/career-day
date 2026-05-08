import type { Route } from "./+types/_index";
import { AIDemo } from "../components/sections/AIDemo";
import { AIMagic } from "../components/sections/AIMagic";
import { Cloudflare } from "../components/sections/Cloudflare";
import { Companies } from "../components/sections/Companies";
import { Dashboard } from "../components/sections/Dashboard";
import { Developer } from "../components/sections/Developer";
import { Education } from "../components/sections/Education";
import { Interesting } from "../components/sections/Interesting";
import { LiveCode } from "../components/sections/LiveCode";
import { Office } from "../components/sections/Office";
import { Questions } from "../components/sections/Questions";
import { Salary } from "../components/sections/Salary";
import { Subjects } from "../components/sections/Subjects";
import { Tools } from "../components/sections/Tools";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Career Day" }, { name: "description", content: "Career day presentation" }];
}

export default function Index() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-auto">
      <Developer />
      <Companies />
      <Cloudflare />
      <Dashboard />
      <Tools />
      <Office />
      <Education />
      <Subjects />
      <Salary />
      <Interesting />
      <LiveCode />
      <AIMagic />
      <AIDemo />
      <Questions />
    </main>
  );
}
