import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { ChatWidget } from "@/components/ChatWidget";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionScroller } from "@/components/SectionScroller";
import { PageTimeline } from "@/components/PageTimeline";

export default function Home() {
  return (
    <>
      <SectionScroller />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <ScrollReveal direction="left">
          <About />
        </ScrollReveal>
        <SectionDivider />
        <ScrollReveal direction="up" delay={100}>
          <Projects />
        </ScrollReveal>
        <SectionDivider />
        <ScrollReveal direction="right" delay={100}>
          <Contact />
        </ScrollReveal>
      </main>
      <ScrollReveal direction="up" delay={50}>
        <Footer />
      </ScrollReveal>
      <PageTimeline />
      <ChatWidget />
    </>
  );
}
