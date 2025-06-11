"use client";

import Script from "next/script";

export default function RubiconScript() {
  return (
    <>
      <Script id="rubicon-settings" strategy="beforeInteractive">
        {`
        window.rubiconSetting = window.rubiconSetting || {};
        window.rubiconSetting = {
          locale: "ko",
          environment: "familynet",
          type: "embedded"
        };
        `}
      </Script>
      <Script src={`/rubicon.min.js`} strategy="beforeInteractive" />
    </>
  );
}
