import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haggiga Organics - From Our Land to Your Table",
  description: "Turning locally grown groundnuts into pure cooking oil while empowering farmers in South Sudan. High-quality, affordable, and sustainably produced.",
  icons: {
    icon: "/images/haggiga-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
