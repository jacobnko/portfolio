import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Capabilities } from "@/components/capabilities";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
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

        <section id="experience" className="section-y">
          <Experience />
        </section>

        <section id="contact" className="section-y">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
