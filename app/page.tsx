export default function Home() {
  return (
    <main className="container-x section-y max-content">
      <p className="font-mono text-sm uppercase tracking-widest text-primary">
        Software / Product Engineer
      </p>
      <h1 className="mt-4 text-4xl sm:text-5xl">Jacob Ko — Portfolio</h1>
      <p className="mt-4 max-w-prose text-muted-foreground">
        디자인 시스템 부팅 확인용 임시 화면 (묶음 B 에서 실제 섹션으로 교체).
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <span className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground">
          primary (blue)
        </span>
        <span className="rounded-lg bg-accent px-4 py-2 text-sm text-accent-foreground">
          accent (purple)
        </span>
        <span className="rounded-lg border px-4 py-2 text-sm text-muted-foreground">
          border / muted
        </span>
      </div>
    </main>
  );
}
