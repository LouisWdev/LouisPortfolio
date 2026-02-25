import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
});

export const metadata: Metadata = {
  title: "LOUIS.EXE — Full-Stack Developer",
  description:
    "Portfolio of Louis — Full-Stack Developer, Space Marine, Diamond-tier Terran. In service of the Omnissiah.",
  keywords: [
    "developer",
    "portfolio",
    "full-stack",
    "TypeScript",
    "Next.js",
    "React",
    "cyberpunk",
  ],
  authors: [{ name: "Louis" }],
  openGraph: {
    title: "LOUIS.EXE — Full-Stack Developer",
    description:
      "Cyberpunk portfolio of Louis — Full-Stack Developer & Warhammer 40K enthusiast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${shareTechMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
