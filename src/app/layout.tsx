import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4">
      <div className="text-2xl font-bold"> Gallery</div>
      <div className="text-2xl font-bold"> Sign out</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <TopNav />
      <body>{children}</body>
    </html>
  );
}
