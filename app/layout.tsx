"use client";
// import type { Metadata } from "next";
import "./globals.css";
import { TheFooter } from "@/components/TheFooter";
import { TheHeader } from "@/components/TheHeader";
import "./i18n";
import Head from "next/head";

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
      {/* <Head>
        <title>pickbonus.myawardwallet</title>
        <meta name="description" content="The World's First Casino Ecosystem" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@700&display=swap"
        />
      </Head> */}
      <body>
        <TheHeader />

        {children}

        <TheFooter />
      </body>
    </html>
  );
}
