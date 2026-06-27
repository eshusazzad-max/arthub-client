import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/providers/SmoothScroll";
import MouseGlow from "@/providers/MouseGlow";
import ScrollToTop from "@/components/shared/ScrollToTop";
import ThemeProvider from "@/components/shared/ThemeProvider";
import AuthSessionProvider from "@/components/shared/SessionProvider";
import { Toaster } from "react-hot-toast";
import SaveUser from "@/components/auth/SaveUser";

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
        <AuthSessionProvider>
         <ThemeProvider>
          <SaveUser/>
          <MouseGlow />
          <SmoothScroll />
           {children}
           <Toaster
            position="top-right"
            toastOptions={{
             duration: 3000,
              style: {
             background: "#18181B",
             color: "#fff",
             border: "1px solid #7C3AED",
           },
          }}
          />
          <ScrollToTop />
         </ThemeProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}