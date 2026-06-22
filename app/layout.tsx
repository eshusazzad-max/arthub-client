import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/providers/SmoothScroll";
import MouseGlow from "@/providers/MouseGlow";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArtHub",
  description: "Discover & Buy Original Art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolage.className}>
        <MouseGlow />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}