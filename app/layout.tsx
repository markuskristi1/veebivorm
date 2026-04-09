import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Veebivorm – Kodulehed väikeettevõtetele",
  description:
    "Kaasaegsed ja mobiilisõbralikud kodulehed teenusettevõtetele.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et">
      <body className="bg-white text-neutral-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}