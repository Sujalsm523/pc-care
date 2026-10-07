import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import VideoCallMock from "@/components/VideoCallMock";
import BookingMock from "@/components/BookingMock";

export const metadata: Metadata = {
  title: "Live sessions",
  description:
    "A preview of future 1:1 trainer sessions and booking. Coming soon.",
};

export default function Sessions() {
  return (
    <Container className="py-16">
      <SectionHeading
        eyebrow="Live trainer sessions — Coming soon"
        title="Train together, even from home."
      >
        A preview of how 1:1 sessions and booking may look in a future release.
        Nothing here is live.
      </SectionHeading>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <VideoCallMock />
        <BookingMock />
      </div>
    </Container>
  );
}
