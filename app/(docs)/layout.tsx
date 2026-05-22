import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orynt - Autonomous Capital",
  description: "Orynt - Autonomous Capital",
};

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
