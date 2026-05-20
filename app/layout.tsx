import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crypto Landing Page",
  description: "Web3 native AI operating system landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      style={
        {
          "--font-plus-jakarta-sans":
            "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
        } as CSSProperties
      }
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
