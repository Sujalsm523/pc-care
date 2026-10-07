import { notFound } from "next/navigation";
import { trainers } from "@/data/trainers";
import TrainerProfile from "./TrainerProfile";

export function generateStaticParams() {
  return trainers.map((t) => ({ slug: t.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = trainers.find((x) => x.slug === slug);
  if (!t) notFound();
  return <TrainerProfile t={t} />;
}
