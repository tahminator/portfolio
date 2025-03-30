import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import AnimatedBeam from "@/components/Background/Background";
import { Navbar } from "@/components/Navbar";
import { BiDownArrow } from "react-icons/bi";
import { FaCaretDown, FaDownLong, FaUpDown } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { DownArrow } from "@/components/DownArrow/DownArrow";
import { SpeedInsights } from "@vercel/speed-insights/next";

const rubik = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tahmid Ahmed - Portfolio - Software Engineer",
  description:
    "Personal website of Tahmid Ahmed at tahmid.io. Software Engineer, Full Stack Developer, and a Computer Science student at Hunter College.",
  keywords: [
    "Tahmid Ahmed",
    "tahmid.io",
    "midhat.io",
    "portfolio",
    "personal website",
    "0pengu",
    "Tahmid Ahmed portfolio",
    "Tahmid Ahmed personal website",
    "Tahmid Ahmed github",
    "Tahmid Ahmed software engineer",
    "Tahmid Ahmed Synergy Prep",
    "Tahmid Ahmed Hunter College",
    "Tahmid Ahmed LinkedIn",
    "Tahmid Ahmed resume",
    "Tahmid Ahmed projects",
    "Tahmid Ahmed blog",
    "Tahmid Ahmed tahmid.io",
    "Tahmid Ahmed midhat.io",
  ],
  authors: [
    { name: "Tahmid Ahmed" },
    { name: "0pengu" },
    { name: "Midhat.io" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        <div className="h-max">
          <Navbar />
          {children}
          <DownArrow />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
