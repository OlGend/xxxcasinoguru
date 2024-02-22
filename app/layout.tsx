"use client";
// import type { Metadata } from "next";
import "./globals.css";
// import "./fonts/BebasNeue-Regular.ttf"
import { TheFooter } from "@/components/TheFooter";
import { TheHeader } from "@/components/TheHeader";
import "./i18n";
import Script from "next/script";

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
      <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-6R57VFFHHS"
          async
        />
        <Script
          id="google-tag-manager-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6R57VFFHHS');
            `,
          }}

        />
      <Script id="customerio" type="text/javascript">
          {`
            var _cio = _cio || [];
            (function() {
              var a,b,c;a=function(f){return function(){_cio.push([f].
              concat(Array.prototype.slice.call(arguments,0)))}};b=["load","identify",
              "sidentify","track","page"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
              var t = document.createElement('script'),
                  s = document.getElementsByTagName('script')[0];
              t.async = true;
              t.id    = 'cio-tracker';
              t.setAttribute('data-site-id', 'b0e62a74234c966830e3');
              t.src = 'https://assets.customer.io/assets/track-eu.js';
              s.parentNode.insertBefore(t, s);
            })();
          `}
        </Script>
        <TheHeader />

        {children}

        <TheFooter />
      </body>
    </html>
  );
}
