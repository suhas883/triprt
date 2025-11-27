import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TripRT - Find Cheapest Flights & Hotels",
  description: "AI-powered travel search that finds flights 30% cheaper by searching in 15 languages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
