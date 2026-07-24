import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Writing } from "@/components/Writing";
import { OpenSource } from "@/components/OpenSource";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <SkillsMarquee />
        <Experience />
        <Work />
        <Writing />
        <OpenSource />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
