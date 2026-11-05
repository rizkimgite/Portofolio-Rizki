import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Poppins } from "next/font/google";
import siteIcon from "../img/icon.png";
import LoadingScreen from "./loading-screen";
import MotionEnhancer from "./motion-enhancer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rizki Mulyawan | Portfolio",
  description: "Portfolio profesional Rizki Mulyawan, Junior Front End Specialist dan Web Developer.",
  icons: { icon: siteIcon.src, apple: siteIcon.src },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body>
        <LoadingScreen />
        <MotionEnhancer />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
