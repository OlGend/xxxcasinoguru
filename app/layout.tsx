"use client"
// import type { Metadata } from "next";
import "./globals.css";
import { TheFooter } from "@/components/TheFooter"
import { TheHeader } from "@/components/TheHeader";
import './i18n';


// export const metadata: Metadata = {
//   title: "pickbonus.myawardwallet",
//   description: `The World's First Casino Ecosystem`,
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TheHeader />

        {children}

        <TheFooter />
      </body>
    </html>
  );
}
