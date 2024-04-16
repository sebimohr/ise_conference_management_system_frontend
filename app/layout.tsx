import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import React from "react";
import NavBar from "@/app/components/home/navbar";
import Footer from "@/app/components/home/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CMS - Reviewer",
  description: "Review your assigned papers here!",
};

/**
 * The global layout of the app.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>
          <div className={"min-h-screen flex flex-col"}>
            <NavBar />
            <div className="flex flex-grow place-content-center">
              <div className="basis-full px-4 py-4 lg:max-w-screen-xl">
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
