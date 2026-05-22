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
      <div className="bg-[#0A0A0A]">
        <HeroSection />
      </div>
      <StackedSectionCards
        className="-mt-8 pt-8 md:-mt-10 md:pt-10"
        sections={[
          { content: <ShiftSection key="shift" />, backgroundClassName: "bg-[#0E0E0E]" },
          { content: <CoordinationSection key="coordination" />, backgroundClassName: "bg-[#141414]" },
          { content: <PrinciplesSection key="principles" />, backgroundClassName: "bg-[#1A1A1A]" },
          { content: <InfrastructureSection key="infrastructure" />, backgroundClassName: "bg-[#121212]" },
        ]}
      />
      <div className="relative z-20 bg-[#080808]">
        <FooterSection />
      </div>
    </main>
  );
}
