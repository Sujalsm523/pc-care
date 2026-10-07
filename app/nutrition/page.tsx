import type { Metadata } from "next";
import { Container, SectionHeading, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Nutrition & future support",
  description:
    "Nutrition, professional care, AI and community — what PCOS Care may offer in future releases.",
};

const groups: {
  heading: string;
  title: string;
  tag: string;
  intro: string;
  items: string[];
}[] = [
  {
    heading: "Nutrition",
    title: "Food without the confusion.",
    tag: "Coming soon",
    intro:
      "Simple tools for noticing how you eat. PCOS Care will not offer medical diet prescriptions.",
    items: ["Food logging", "Recipes", "Meal plans", "Nutrition guidance"],
  },
  {
    heading: "Professional care",
    title: "More support, when you’re ready for it.",
    tag: "Future release",
    intro:
      "Optional connections to professionals. Not interactive in this concept.",
    items: [
      "Doctors",
      "Nutritionists",
      "Gynecologists",
      "Lab reports",
      "Health records",
      "Medication tracking",
    ],
  },
  {
    heading: "AI",
    title: "A smarter health companion.",
    tag: "Coming soon",
    intro:
      "Future versions may include AI-powered features. There is no chatbot on this site.",
    items: [
      "Wellness insights",
      "Food analysis",
      "Habit suggestions",
      "Personalized summaries",
    ],
  },
  {
    heading: "Community",
    title: "You don’t have to figure it out alone.",
    tag: "Coming soon",
    intro: "Spaces to share and learn together.",
    items: ["Community groups", "Challenges", "Discussions", "Events"],
  },
];

export default function Nutrition() {
  return (
    <Container className="py-16">
      <h1 className="serif max-w-3xl text-5xl leading-[1.05] md:text-7xl">
        Food without the confusion.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-[#1F2421]/70">
        Nutrition and the features below are not live. They show where PCOS Care
        is heading.
      </p>
      <div className="mt-16 space-y-16">
        {groups.map((g) => (
          <section
            key={g.heading}
            aria-labelledby={g.heading}
            className="grid gap-8 border-t border-[#1F2421] pt-8 md:grid-cols-[1fr_1.2fr]"
          >
            <div>
              <Badge tone="future">{g.tag}</Badge>
              <h2 id={g.heading} className="serif mt-3 text-3xl md:text-4xl">
                {g.title}
              </h2>
              <p className="mt-3 text-sm text-[#1F2421]/70">{g.intro}</p>
            </div>
            <ul className="grid grid-cols-2 gap-x-6">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="serif border-b border-[#1F2421]/10 py-3 text-xl"
                >
                  {i}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Container>
  );
}
