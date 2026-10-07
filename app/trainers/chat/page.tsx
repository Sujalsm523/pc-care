"use client";
import { useState } from "react";
import { Container, Badge } from "@/components/ui";

type Msg = { from: "trainer" | "user"; text: string; time: string };
const seed: Msg[] = [
  {
    from: "trainer",
    text: "How did your workout feel today?",
    time: "9:12 AM",
  },
  {
    from: "user",
    text: "The lower-body session felt good. I found the last set challenging.",
    time: "9:15 AM",
  },
  {
    from: "trainer",
    text: "That’s a good place to be. Let’s keep the next session at the same intensity.",
    time: "9:18 AM",
  },
];

export default function Chat() {
  const [msgs, setMsgs] = useState(seed);
  const [v, setV] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!v.trim()) return;
    setMsgs([...msgs, { from: "user", text: v, time: "Now" }]);
    setV("");
  };
  return (
    <Container className="max-w-xl py-12">
      <Badge>Demo conversation</Badge>
      <h1 className="serif mt-3 text-4xl">Ananya Mehta</h1>
      <div className="mt-6 space-y-3" aria-live="polite">
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === "user" ? "justify-end" : ""}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                m.from === "user" ? "bg-[#1F2421] text-[#F5F1EA]" : "bg-white"
              }`}
            >
              {m.text}
              <span className="mt-1 block text-[10px] opacity-60">
                {m.time}
              </span>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={send} className="mt-6 flex gap-2">
        <input
          value={v}
          onChange={(e) => setV(e.target.value)}
          aria-label="Message your trainer"
          placeholder="Message your trainer…"
          className="flex-1 rounded-full border border-[#1F2421]/20 bg-white px-4 py-2.5 text-sm"
        />
        <button className="rounded-full bg-[#B5573B] px-5 text-sm text-white">
          Send
        </button>
      </form>
      <p className="mt-2 text-xs text-[#1F2421]/50">
        Messages stay in your browser and are not sent anywhere.
      </p>
    </Container>
  );
}
