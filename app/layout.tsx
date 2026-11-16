import type { Metadata } from "next";
import { Space_Grotesk, Chakra_Petch } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const bodyFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const displayFont = Chakra_Petch({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });
export const metadata: Metadata = {
  title: { default: "AI From Scratch | Learn AI by playing", template: "%s | AI From Scratch" },
  description: "Understand artificial intelligence through bite-sized lessons, interactive experiments, and friendly challenges. Free to explore, no setup needed.",
  openGraph: { title: "AI From Scratch", description: "Learn AI, one experiment at a time.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${bodyFont.variable} ${displayFont.variable}`}><Header /><main>{children}</main><Footer /></body></html>;
}
