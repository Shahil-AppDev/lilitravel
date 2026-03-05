import { clsx } from "clsx";

export default function Skeleton({ className }: { className?: string }) {
  return (
    <div className={clsx("animate-pulse bg-slate-200 rounded-xl", className)} />
  );
}
