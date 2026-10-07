"use client";
import { useState } from "react";
import { Modal } from "./ui";

const durations = [30, 45, 60];
const days = ["Mon 6", "Tue 7", "Wed 8", "Thu 9", "Fri 10"];
const times = ["7:00 AM", "8:00 AM", "12:30 PM", "6:30 PM"];

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-1.5 text-sm ${
        active
          ? "bg-[#1F2421] text-[#F5F1EA]"
          : "border-[#1F2421]/20 hover:border-[#1F2421]"
      }`}
    >
      {children}
    </button>
  );
}

export default function BookingMock() {
  const [d, setD] = useState(45);
  const [day, setDay] = useState(days[1]);
  const [time, setTime] = useState(times[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-[#1F2421]/10 bg-white/70 p-6">
      <h3 className="serif text-2xl">Book a session with Ananya</h3>
      <p className="text-xs text-[#1F2421]/50">
        Demo interface — no booking is created.
      </p>

      <p className="mt-6 text-xs uppercase tracking-wider text-[#1F2421]/50">
        Duration
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {durations.map((x) => (
          <Chip key={x} active={d === x} onClick={() => setD(x)}>
            {x} min
          </Chip>
        ))}
      </div>

      <p className="mt-6 text-xs uppercase tracking-wider text-[#1F2421]/50">
        Date
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {days.map((x) => (
          <Chip key={x} active={day === x} onClick={() => setDay(x)}>
            {x}
          </Chip>
        ))}
      </div>

      <p className="mt-6 text-xs uppercase tracking-wider text-[#1F2421]/50">
        Available times
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {times.map((x) => (
          <Chip key={x} active={time === x} onClick={() => setTime(x)}>
            {x}
          </Chip>
        ))}
      </div>

      <button
        onClick={() => setOpen(true)}
        className="mt-8 w-full rounded-full bg-[#1F2421] px-5 py-3 text-sm text-[#F5F1EA] hover:bg-[#B5573B]"
      >
        Confirm — {d} min, {day}, {time}
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Coming soon">
        Booking will be available in a future release.
      </Modal>
    </div>
  );
}
