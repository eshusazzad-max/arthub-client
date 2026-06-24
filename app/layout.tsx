import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/providers/SmoothScroll";
import MouseGlow from "@/providers/MouseGlow";
import ScrollToTop from "@/components/shared/ScrollToTop";
import ThemeProvider from "@/components/shared/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={bricolage.className}>
        <ThemeProvider>
        <MouseGlow />
        <SmoothScroll />
         {children}
        <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}