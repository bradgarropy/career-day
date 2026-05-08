import { Meter } from "@cloudflare/kumo/components/meter";
import { Section } from "../Section";

const MIN_SALARY = 100_000;
const MAX_SALARY = 400_000;
const CURRENT_SALARY = 218_000;

const formatUSD = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export const Salary = () => {
  return (
    <Section id="salary">
      <h1 className="text-[10rem] font-extrabold leading-none m-0">Salary</h1>

      <div className="mt-12 w-[80vw] max-w-[1100px] mx-auto">
        <Meter
          label=""
          min={MIN_SALARY}
          max={MAX_SALARY}
          value={CURRENT_SALARY}
          showValue={false}
          trackClassName="h-6"
          indicatorClassName="bg-cf-orange"
        />

        <div className="mt-3 flex justify-between text-2xl font-medium">
          <span>{formatUSD(MIN_SALARY)}</span>
          <span>{formatUSD(MAX_SALARY)}</span>
        </div>
      </div>
    </Section>
  );
};
