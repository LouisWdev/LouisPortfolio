import { Navigation } from "@/components/Navigation";
import { BootScreen } from "@/components/BootScreen";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { ChatWidget } from "@/components/ChatWidget";
import { PageTimeline } from "@/components/PageTimeline";
import { Footer } from "@/components/Footer";
import { GlitchReveal } from "@/components/GlitchReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionScroller } from "@/components/SectionScroller";

export default function Home() {
  return (
    <>
      <SectionScroller />
<Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <GlitchReveal>
          <About />
        </GlitchReveal>
        <SectionDivider />
        <GlitchReveal delay={80}>
          <Projects />
        </GlitchReveal>
        <SectionDivider />
        <GlitchReveal delay={80}>
          <Contact />
        </GlitchReveal>
      </main>
      <Footer />
      <PageTimeline />
      <ChatWidget />
      <BootScreen />
    </>
  );
}
