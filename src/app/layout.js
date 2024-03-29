"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import "./globals.css";
import { Inter } from "next/font/google";
import SiteTopbar from "./../components/SiteTopbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteTopbar />
        {children}
        <Footer />
        <ProgressBar
          height="3px"
          color="#ef4444"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  );
}
