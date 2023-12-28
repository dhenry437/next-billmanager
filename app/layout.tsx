import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/app/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { template: "%s | Billmanager", default: "Billmanager" },
  description: "Zero-sum money management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-white" lang="en">
      <body className={`${inter.className} h-full`}>
        <header className="absolute inset-x-0 top-0 z-50">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
