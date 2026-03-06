"use client";

/* eslint-disable react-hooks/set-state-in-effect */
import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_STORAGE_KEY = "mfds-cookie-consent";
const measurementId = process.env.NEXT_PUBLIC_GA_ID ?? "";

export default function AnalyticsScripts() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored === "accepted") setEnabled(true);

    const handleUpdate = () => {
      if (window.localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted") {
        setEnabled(true);
      }
    };

    window.addEventListener("mfgd-consent-update", handleUpdate);
    return () => window.removeEventListener("mfgd-consent-update", handleUpdate);
  }, []);

  if (!enabled) return null;

  return (
    <>
      {measurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${measurementId}', {
                anonymize_ip: true,
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      ) : null}
      <Script
        src="https://plausible.io/js/pa-fb_AaprKaHpEGLZC1zwVI.js"
        strategy="afterInteractive"
        data-domain="myflightgotdelayed.com"
      />
      <Script id="plausible-init" strategy="afterInteractive">
        {`
          window.plausible = window.plausible || function() {
            (plausible.q = plausible.q || []).push(arguments);
          };
          plausible.init = plausible.init || function(opts) {
            plausible.o = opts || {};
          };
          plausible.init();
        `}
      </Script>
      <Script id="airhelp-tracking" strategy="afterInteractive">
        {`
          (function () {
            var script = document.createElement('script');
            script.async = 1;
            script.src = 'https://emrldco.com/NTA0NDM0.js?t=504434';
            document.head.appendChild(script);
          })();
        `}
      </Script>
    </>
  );
}
