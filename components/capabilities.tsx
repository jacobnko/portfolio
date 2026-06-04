import { CAPABILITIES } from "@/lib/data";

export function Capabilities() {
  return (
    <section className="container-x max-content py-10">
      <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
        {CAPABILITIES.map((cap) => (
          <li
            key={cap}
            className="bg-background px-4 py-5 text-center font-mono text-sm text-muted-foreground"
          >
            {cap}
          </li>
        ))}
      </ul>
    </section>
  );
}
