import type { Metadata } from "next";

import "./globals.css";

import { pretendardStd } from "@/components/fonts";
import clsx from "clsx";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import RubiconScript from "./components/RubiconScript";

export const metadata: Metadata = {
  title: "devcra-nextjs-template",
  description: "DevCra.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <RubiconScript />
      </head>
      <body
        className={clsx(
          "font-pretendard-std antialiased",
          pretendardStd.variable,
        )}
      >
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.8}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD, 0 0 5px #2299DD"
        />

        <Script id="rubicon-config" strategy="beforeInteractive">
          {`
            window.rubiconSetting = window.rubiconSetting || {};
            window.rubiconSetting = {
              locale: "ko", //ko, en
              environment: "devcra" //devcra, dev, prod
            }
          `}
        </Script>

        <Script
          src={`https://rubicon.inhouse.devcra.com/rubicon.min.js?v=${Date.now()}`}
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
