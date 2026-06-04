import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* 묶음 C·D 에서 각 섹션 컴포넌트로 채움 */}
        <section className="container-x section-y max-content">
          <p className="font-mono text-sm text-muted-foreground">
            [hero — 묶음 C]
          </p>
        </section>

        <section id="work" className="container-x section-y max-content">
          <p className="font-mono text-sm text-muted-foreground">
            [selected work + capabilities — 묶음 C]
          </p>
        </section>

        <section id="experience" className="container-x section-y max-content">
          <p className="font-mono text-sm text-muted-foreground">
            [experience & education — 묶음 D]
          </p>
        </section>

        <section id="contact" className="container-x section-y max-content">
          <p className="font-mono text-sm text-muted-foreground">
            [contact — 묶음 D]
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
