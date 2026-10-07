"use client";
import Link from "next/link";
import { useEffect } from "react";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
}: {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}) {
  const cls = `inline-flex items-center justify-center px-5 py-3 text-sm font-medium rounded-full transition-colors ${
    variant === "primary"
      ? "bg-[#1F2421] text-[#F5F1EA] hover:bg-[#B5573B]"
      : "border border-[#1F2421]/25 hover:border-[#1F2421]"
  }`;
  return href ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function Badge({
  children,
  tone = "soft",
}: {
  children: React.ReactNode;
  tone?: "soft" | "future";
}) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] uppercase tracking-wider ${
        tone === "future"
          ? "bg-[#B5573B]/10 text-[#8E3F28]"
          : "bg-[#5E7366]/15 text-[#3F5246]"
      }`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#5E7366]">
          {eyebrow}
        </p>
      )}
      <h2 className="serif text-3xl md:text-5xl leading-[1.1]">{title}</h2>
      {children && (
        <p className="mt-4 text-[#1F2421]/70 leading-relaxed">{children}</p>
      )}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-[#1F2421]/10 bg-white/70 p-5 ${className}`}
    >
      {children}
    </div>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wider text-[#1F2421]/50">
        {label}
      </p>
      <p className="serif text-3xl">{value}</p>
    </div>
  );
}

export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-5"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        className="max-w-sm rounded-xl bg-[#F5F1EA] p-6"
      >
        <h3 className="serif text-2xl">{title}</h3>
        <div className="mt-2 text-sm text-[#1F2421]/70">{children}</div>
        <button
          autoFocus
          onClick={onClose}
          className="mt-5 rounded-full bg-[#1F2421] px-5 py-2 text-sm text-[#F5F1EA]"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function Sparkline({ data, label }: { data: number[]; label: string }) {
  const max = Math.max(...data),
    min = Math.min(...data);
  const pts = data
    .map(
      (v, i) =>
        `${(i / (data.length - 1)) * 100},${
          30 - ((v - min) / (max - min || 1)) * 26
        }`
    )
    .join(" ");
  return (
    <svg
      viewBox="0 0 100 32"
      role="img"
      aria-label={label}
      className="h-10 w-full"
    >
      <polyline
        points={pts}
        fill="none"
        stroke="#B5573B"
        strokeWidth="1.5"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray="1"
        className="rise"
      />
    </svg>
  );
}

export function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`grid place-items-center bg-[#5E7366]/20 text-xs uppercase tracking-widest text-[#3F5246] ${className}`}
    >
      {label}
    </div>
  );
}
