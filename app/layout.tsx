import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Portfolio 2025",
  description: "A's 2025 Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
