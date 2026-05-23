import { GlobalScrollTracker } from "@/components/landing/global-scroll-tracker";
import { Navbar } from "@/components/landing/navbar";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orynt - Autonomous Capital",
  description: "Orynt - Autonomous Capital",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GlobalScrollTracker />
      <Navbar />
      <AnimatedThemeToggler
        aria-label="Toggle theme"
        className="fixed bottom-5 right-5 z-[80] inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--glass-button-border)] bg-[color:var(--glass-button-bg)] text-[color:var(--text-primary)] shadow-[var(--glass-button-shadow)] backdrop-blur-md transition-colors hover:bg-[color:var(--surface-2)] md:bottom-6 md:right-6"
      />
      {children}
    </>
  );
}
