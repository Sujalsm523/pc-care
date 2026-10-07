import {
  Container,
  Button,
  Badge,
  SectionHeading,
  Card,
  Stat,
  Sparkline,
} from "@/components/ui";
import CycleCalendar from "@/components/CycleCalendar";
import { cycle, progress } from "@/data/cycle";
import { workout } from "@/data/exercises";

const roadmap = [
  [
    "Available concept",
    ["Tracking", "Fitness", "Trainer experience", "Progress"],
  ],
  ["Coming next", ["Nutrition", "Professional care", "Live trainer sessions"]],
  ["Future", ["AI", "Community", "Wearables", "Advanced personalization"]],
] as const;

export default function Home() {
  return (
    <>
      <section className="py-14 md:py-24">
        <Container className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
          <div className="rise">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#5E7366]">
              PCOS Care
            </p>
            <h1 className="serif text-5xl leading-[1.05] md:text-7xl">
              A better way to understand your PCOS journey.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[#1F2421]/70">
              PCOS Care brings cycle tracking, symptom awareness, movement and
              personal support into one thoughtful wellness experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/demo">Explore the platform</Button>
              <Button href="/how-it-works" variant="ghost">
                See what’s inside
              </Button>
            </div>
          </div>
          <div
            className="relative grid grid-cols-2 gap-3"
            aria-label="Example app screens"
          >
            <Card className="col-span-2 md:translate-x-6">
              <div className="flex justify-between">
                <Badge>Example</Badge>
                <span className="text-xs">Cycle</span>
              </div>
              <p className="serif mt-3 text-4xl">Day {cycle.day}</p>
              <p className="text-sm text-[#1F2421]/60">
                Next period: {cycle.nextPeriod}
              </p>
            </Card>
            <Card>
              <p className="text-xs uppercase tracking-wider text-[#1F2421]/50">
                Today’s check-in
              </p>
              <p className="mt-2 text-sm">Energy 7/10 · Stress 4/10</p>
            </Card>
            <Card>
              <p className="text-xs uppercase tracking-wider text-[#1F2421]/50">
                Sleep
              </p>
              <Sparkline
                data={progress.sleep}
                label="Sleep trend, example data"
              />
            </Card>
            <Card className="col-span-2 bg-[#1F2421] text-[#F5F1EA] md:-translate-x-4">
              <p className="text-xs uppercase tracking-wider opacity-60">
                Workout
              </p>
              <p className="serif text-2xl">{workout.title}</p>
              <p className="text-sm opacity-70">
                {workout.minutes} min · {workout.count} exercises ·{" "}
                {workout.place}
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#1F2421]/10 py-6">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <p className="serif text-lg">
            Built around your everyday experience — not just your diagnosis.
          </p>
          <p className="text-sm text-[#1F2421]/60">
            Cycle · Symptoms · Movement · Progress · Support
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="One place"
            title="Your health is more than a calendar."
          >
            PCOS can touch many parts of everyday life — from cycle and energy
            to sleep, movement and mood.
          </SectionHeading>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 serif text-4xl md:text-6xl">
            {["Cycle", "Symptoms", "Energy", "Sleep", "Movement", "Mood"].map(
              (w, i) => (
                <span
                  key={w}
                  className={i % 2 ? "text-[#B5573B] md:translate-y-4" : ""}
                >
                  {w}
                </span>
              )
            )}
          </div>
        </Container>
      </section>

      <section className="bg-white/50 py-20">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Tracking"
              title="Your cycle, understood in context."
            >
              Keep track of cycles, symptoms and daily wellbeing over time.
            </SectionHeading>
            <div className="mt-8 flex gap-8">
              <Stat label="Cycle day" value={String(cycle.day)} />
              <Stat label="Average" value={`${cycle.avg}d`} />
            </div>
            <div className="mt-6">
              <Badge>Example view</Badge>
            </div>
          </div>
          <CycleCalendar />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Roadmap"
            title="What exists, and what’s next."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {roadmap.map(([h, items]) => (
              <div key={h} className="border-t border-[#1F2421] pt-4">
                <Badge tone={h === "Available concept" ? "soft" : "future"}>
                  {h}
                </Badge>
                <ul className="mt-4 space-y-2 serif text-xl">
                  {items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
