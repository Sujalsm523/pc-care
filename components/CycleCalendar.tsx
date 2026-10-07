import { cycle } from "@/data/cycle";

export default function CycleCalendar() {
  return (
    <div>
      <div
        role="grid"
        aria-label="Example cycle calendar"
        className="grid grid-cols-7 gap-1.5"
      >
        {Array.from({ length: cycle.length }, (_, i) => i + 1).map((d) => {
          const period = cycle.periodDays.includes(d),
            today = d === cycle.day,
            ov = d === cycle.ovulation;
          return (
            <div
              key={d}
              role="gridcell"
              aria-label={`Cycle day ${d}${period ? ", period" : ""}${
                today ? ", today" : ""
              }`}
              className={`grid aspect-square place-items-center rounded-md text-xs ${
                period
                  ? "bg-[#B5573B] text-white"
                  : ov
                  ? "bg-[#5E7366]/25"
                  : "border border-[#1F2421]/10"
              } ${today ? "ring-2 ring-[#1F2421]" : ""}`}
            >
              {d}
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-[#1F2421]/60">
        Estimates are based on previously tracked cycles and are not medical
        predictions.
      </p>
    </div>
  );
}
