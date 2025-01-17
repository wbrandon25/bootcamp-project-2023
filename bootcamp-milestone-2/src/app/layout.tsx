import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brandon's Personal Website",
  description: "A personal website for Brandon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} hello`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}