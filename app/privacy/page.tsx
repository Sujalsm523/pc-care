import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How PCOS Care thinks about your data.",
};

export default function Privacy() {
  return (
    <Container className="max-w-2xl py-16">
      <h1 className="serif text-5xl">Privacy</h1>
      <p className="mt-6 font-medium">
        This public website does not collect or store your health tracking data.
      </p>
      <p className="mt-4 text-[#1F2421]/70">
        The future product may collect cycle and wellbeing information you
        choose to log. Health information is sensitive, so it will be built
        around user control, strong security, data export and account deletion.
      </p>
    </Container>
  );
}
