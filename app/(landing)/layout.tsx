import { GlobalScrollTracker } from "@/components/landing/global-scroll-tracker";
import { Navbar } from "@/components/landing/navbar";

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
