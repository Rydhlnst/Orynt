import { OryntLeftSidebar } from "@/components/orynt/orynt-left-sidebar";
import { OryntMainContent } from "@/components/orynt/orynt-main-content";
import { OryntRightSidebar } from "@/components/orynt/orynt-right-sidebar";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function OryntLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <AnimatedThemeToggler
        aria-label="Toggle theme"
        className="fixed bottom-5 right-5 z-[80] inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-[color:var(--surface-1)] text-foreground shadow-[var(--glass-button-shadow)] backdrop-blur-sm transition-colors hover:bg-[color:var(--surface-2)] md:bottom-6 md:right-6"
      />
      <div className="mx-auto grid min-h-screen max-w-400 lg:grid-cols-[280px_minmax(0,1fr)_300px]">
        <OryntLeftSidebar />

        <main className="px-5 pb-16 md:px-8 lg:px-10">
          <OryntMainContent />
        </main>

        <div className="border-t border-border px-5 py-8 md:px-8 lg:border-l lg:border-t-0 lg:px-6 lg:py-6">
          <OryntRightSidebar />
        </div>
      </div>
    </div>
  );
}
