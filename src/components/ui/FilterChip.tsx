"use client";

import { cn } from "@/lib/utils";

export default function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-white"
          : "border-slate-200 bg-white text-ink-soft hover:border-primary hover:text-primary"
      )}
    >
      {label}
    </button>
  );
}
