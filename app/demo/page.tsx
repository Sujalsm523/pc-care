"use client";
import { useState } from "react";
import { Container, Badge, Card, Stat, Sparkline } from "@/components/ui";
import CycleCalendar from "@/components/CycleCalendar";
import { cycle, progress, symptoms, history } from "@/data/cycle";
import { workout } from "@/data/exercises";

const tabs = ["Dashboard", "Cycle", "Symptoms", "Progress"] as const;

export default function Demo() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Dashboard");
  return (
    <Container className="max-w-3xl py-12">
      <Badge>Interactive demo — sample data</Badge>
      <h1 className="serif mt-3 text-4xl">Hi, Maya</h1>
      <div
        role="tablist"
        className="mt-6 flex gap-1 overflow-x-auto border-b border-[#1F2421]/10"
      >
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`whitespace-nowrap px-4 py-2 text-sm ${
              tab === t
                ? "border-b-2 border-[#B5573B] font-medium"
                : "text-[#1F2421]/60"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="mt-8 rise" key={tab}>
        {tab === "Dashboard" && (
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <Stat label="Cycle day" value={String(cycle.day)} />
            </Card>
            <Card>
              <Stat label="Energy" value="7/10" />
            </Card>
            <Card>
              <Stat label="Stress" value="4/10" />
            </Card>
            <Card>
              <Stat label="Sleep" value="7.5h" />
            </Card>
            <Card className="sm:col-span-2">
              <p className="text-xs uppercase text-[#1F2421]/50">
                Today’s workout
              </p>
              <p className="serif text-2xl">Lower Body Strength</p>
              <p className="text-sm">
                with Ananya Mehta · {workout.minutes} min
              </p>
            </Card>
          </div>
        )}
        {tab === "Cycle" && (
          <>
            <CycleCalendar />
            <p className="mt-4 text-sm">
              Past cycles: {history.join(", ")} days
            </p>
          </>
        )}
        {tab === "Symptoms" && (
          <div className="flex gap-2">
            {symptoms.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        )}
        {tab === "Progress" && (
          <div className="space-y-4">
            {(["sleep", "energy", "stress"] as const).map((k) => (
              <Card key={k}>
                <p className="text-xs uppercase text-[#1F2421]/50">{k}</p>
                <Sparkline
                  data={progress[k]}
                  label={`${k} trend, sample data`}
                />
              </Card>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
