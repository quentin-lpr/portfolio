import "./globals.css";
import type React from "react"
import { Dock } from "./components/Dock";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Dock />
      </body>
    </html>
  );
}
