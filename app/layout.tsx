import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Playfair_Display } from "next/font/google";
import siteIcon from "../img/icon.png";
import LoadingScreen from "./loading-screen";
import MotionEnhancer from "./motion-enhancer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Rizki Mulyawan | Portfolio",
  description: "Portfolio profesional Rizki Mulyawan, Junior Front End Specialist dan Web Developer.",
  icons: { icon: siteIcon.src, apple: siteIcon.src },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${dmSans.variable} ${dmMono.variable} ${playfairDisplay.variable}`}>
        <LoadingScreen />
        <MotionEnhancer />
        {children}
      </body>
    </html>
  );
}
