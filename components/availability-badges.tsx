import { BADGES } from "@/lib/data";

export function AvailabilityBadges({ className }: { className?: string }) {
  return (
    <ul className={"flex flex-wrap gap-3 " + (className ?? "")}>
      {BADGES.map((badge, i) => (
        <li
          key={badge.label}
          className={
            "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium " +
            (i === 0
              ? "border-primary/30 bg-primary/5 text-foreground"
              : i === 1
                ? "border-accent/30 bg-accent/5 text-foreground"
                : "border-border bg-secondary text-foreground")
          }
        >
          <span aria-hidden>{badge.emoji}</span>
          {badge.label}
        </li>
      ))}
    </ul>
  );
}
