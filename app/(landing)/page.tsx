import { HeroSection } from "@/components/sections/HeroSection";
import { ShiftSection } from "@/components/sections/ShiftSection";
import { CoordinationSection } from "@/components/sections/CoordinationSection";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="relative isolate overflow-x-clip bg-[color:var(--background)] text-[color:var(--text-primary)]">
      <HeroSection />
      <ShiftSection />
      <CoordinationSection />
      <InfrastructureSection />
      <FooterSection />
    </main>
  );
}
