import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/src/styles/animations.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xai - Intelligence Workspace",
  description: "Transform raw data into structured intelligence with AI-powered automation",
  keywords: ["AI", "Intelligence", "Data Analysis", "Automation", "Analytics"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Xai - Intelligence Workspace",
    description: "Transform raw data into structured intelligence",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}