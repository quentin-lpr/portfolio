import "./globals.css";
import type React from "react"
import { Dock } from "./components/Dock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Quentin L. portfolio",
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="fr">
      <body>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        {children}
        <Dock />
      </body>
    </html>
  );
}
