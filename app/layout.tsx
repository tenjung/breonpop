import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "브레온팝 - BREONPOP | 아트 덴탈 케어",
  description: "정화가 예술이 되는 순간. 브레온팝은 치약이 아닌, 욕실에 놓이는 하나의 아트 오브제입니다.",
  openGraph: {
    title: "브레온팝 - BREONPOP",
    description: "브레온팝 브랜드 홈페이지",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
