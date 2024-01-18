"use client";
import type { Metadata } from "next";
import Head from "next/head";
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
       <Head>
        <title>xxxcasinoguru</title>
        <meta name="description" content="casino guru is a very cool site" />
        {/* Добавляем ссылки на шрифты внутри компонента Head */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@700&display=swap"
        />
      </Head>
      <body>
        <TheHeader />

        {children}

        <TheFooter />
      </body>
    </html>
  );
}
