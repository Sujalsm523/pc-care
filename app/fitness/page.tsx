"use client";
import { useState } from "react";
import {
  Container,
  SectionHeading,
  Card,
  Badge,
  Button,
  ImagePlaceholder,
} from "@/components/ui";
import { exercises, workout } from "@/data/exercises";

const types = ["All", "Strength", "Mobility", "Cardio", "Yoga"];

export default function Fitness() {
  const [f, setF] = useState("All");
  const [step, setStep] = useState(0);
  const list = exercises.filter((e) => f === "All" || e.type === f);
  return (
    <Container className="py-16">
      <SectionHeading eyebrow="Fitness" title="Movement that fits your life.">
        Fitness experiences designed around different goals and abilities.
        Sample content only.
      </SectionHeading>

      <section className="mt-14 grid gap-8 md:grid-cols-2" aria-labelledby="w">
        <ImagePlaceholder
          label="Workout video thumbnail"
          className="aspect-video rounded-xl"
        />
        <div>
          <Badge>Demo workout</Badge>
          <h2 id="w" className="serif mt-3 text-4xl">
            {workout.title}
          </h2>
          <p className="text-sm text-[#1F2421]/60">
            {workout.minutes} min · {workout.count} exercises · {workout.level}{" "}
            · {workout.place}
          </p>
          <ol className="mt-6 space-y-2">
            {workout.moves.map((m, i) => (
              <li
                key={m}
                className={`rounded-lg border px-4 py-3 ${
                  i === step
                    ? "border-[#B5573B] bg-white"
                    : "border-[#1F2421]/10"
                }`}
              >
                {m}
              </li>
            ))}
          </ol>
          <div className="mt-5">
            <Button onClick={() => setStep((step + 1) % workout.moves.length)}>
              Next exercise
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="serif text-3xl md:text-4xl">
          A library built for real people.
        </h2>
        <div
          className="mt-6 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter exercises"
        >
          {types.map((t) => (
            <button
              key={t}
              aria-pressed={f === t}
              onClick={() => setF(t)}
              className={`rounded-full border px-4 py-1.5 text-sm ${
                f === t ? "bg-[#1F2421] text-[#F5F1EA]" : "border-[#1F2421]/20"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {list.map((e) => (
            <Card key={e.name}>
              <p className="serif text-xl">{e.name}</p>
              <p className="text-xs text-[#1F2421]/60">
                {e.type} · {e.level}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
