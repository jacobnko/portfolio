import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Capabilities } from "@/components/capabilities";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />

        <Capabilities />

        <section id="work" className="section-y">
          <Projects />
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
