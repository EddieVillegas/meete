import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meeti - Next",
  description: "Meeti Proyect Next.js and DrizzledORM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
