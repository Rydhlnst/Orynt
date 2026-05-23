import { StackedSectionCards } from "@/components/landing/StackedSectionCards";
import { CoordinationSection } from "@/components/sections/CoordinationSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { ShiftSection } from "@/components/sections/ShiftSection";

export default function Home() {
  return (
    <main className="relative z-10 isolate overflow-x-clip bg-transparent text-[color:var(--text-primary)]">
      <div className="bg-[color:var(--landing-hero-bg)]">
        <HeroSection />
      </div>
      <StackedSectionCards
        className="-mt-8 pt-8 md:-mt-10 md:pt-10"
        sections={[
          { content: <ShiftSection key="shift" />, backgroundClassName: "bg-[color:var(--landing-section-1-bg)]" },
          { content: <CoordinationSection key="coordination" />, backgroundClassName: "bg-[color:var(--landing-section-2-bg)]" },
          { content: <PrinciplesSection key="principles" />, backgroundClassName: "bg-[color:var(--landing-section-3-bg)]" },
          { content: <InfrastructureSection key="infrastructure" />, backgroundClassName: "bg-[color:var(--landing-section-4-bg)]" },
        ]}
      />
      <div className="relative z-20 bg-[color:var(--landing-footer-bg)]">
        <FooterSection />
      </div>
    </main>
  );
}
