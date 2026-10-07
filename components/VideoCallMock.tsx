"use client";
import { useEffect, useState } from "react";
import { Mic, MicOff, Video, VideoOff, PhoneOff } from "lucide-react";
import { Badge, ImagePlaceholder } from "./ui";

export default function VideoCallMock() {
  const [secs, setSecs] = useState(754);
  const [mic, setMic] = useState(true);
  const [cam, setCam] = useState(true);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    if (ended) return;
    const id = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [ended]);

  const t = `${String(Math.floor(secs / 60)).padStart(2, "0")}:${String(
    secs % 60
  ).padStart(2, "0")}`;
  const btn =
    "grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20";

  return (
    <div className="overflow-hidden rounded-xl bg-[#1F2421] p-3 text-[#F5F1EA]">
      <div className="flex items-center justify-between px-2 pb-3">
        <Badge tone="future">Demo — Coming soon</Badge>
        <span className="text-sm tabular-nums" aria-label="Session timer">
          {t}
        </span>
      </div>
      <div className="relative">
        <ImagePlaceholder
          label="Trainer video"
          className="aspect-video rounded-lg !bg-[#5E7366]/40 !text-[#F5F1EA]"
        />
        <ImagePlaceholder
          label={cam ? "You" : "Camera off"}
          className="absolute bottom-3 right-3 h-24 w-20 rounded-md border border-white/30 !bg-[#B5573B]/50 !text-[#F5F1EA] md:h-28 md:w-40"
        />
      </div>
      {ended ? (
        <p className="py-5 text-center text-sm">
          Demo session ended. Live trainer sessions are coming soon.
        </p>
      ) : (
        <div className="flex items-center justify-center gap-3 py-4">
          <button
            className={btn}
            onClick={() => setMic(!mic)}
            aria-label={mic ? "Mute microphone" : "Unmute microphone"}
            aria-pressed={!mic}
          >
            {mic ? <Mic size={18} /> : <MicOff size={18} />}
          </button>
          <button
            className={btn}
            onClick={() => setCam(!cam)}
            aria-label={cam ? "Turn camera off" : "Turn camera on"}
            aria-pressed={!cam}
          >
            {cam ? <Video size={18} /> : <VideoOff size={18} />}
          </button>
          <button
            onClick={() => setEnded(true)}
            className="flex h-11 items-center gap-2 rounded-full bg-[#B5573B] px-5 text-sm hover:bg-[#8E3F28]"
          >
            <PhoneOff size={16} /> End session
          </button>
        </div>
      )}
      <p className="pb-2 text-center text-[11px] opacity-60">
        No camera or microphone is accessed. This is a visual mockup.
      </p>
    </div>
  );
}
