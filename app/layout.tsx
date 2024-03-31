import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";
import React from "react";
import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "CMS - Reviewer",
  description: "Review your assigned papers here!",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="light">
    <body className={inter.className}>
      <Providers>
        <div className={"min-h-screen flex flex-col"}>
          <NavBar/>
          <div className="flex flex-grow place-content-center">
            <div className="basis-3/4 p-4">
              {children}
            </div>
          </div>
          <Footer/>
        </div>
      </Providers>
    </body>
    </html>
  );
}
