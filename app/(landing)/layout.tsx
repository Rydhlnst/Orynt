import { GlobalScrollTracker } from "@/components/landing/global-scroll-tracker";
import { Navbar } from "@/components/landing/navbar";
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
      {children}
    </>
  );
}
