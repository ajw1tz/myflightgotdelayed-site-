"use client";

/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

const STORAGE_KEY = "mfds-cookie-consent";

type ConsentState = "pending" | "accepted" | "declined";

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>("pending");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY) as ConsentState | null;
    if (saved) setConsent(saved);
  }, []);

  const handleChoice = (choice: ConsentState) => {
    setConsent(choice);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, choice);
      window.dispatchEvent(new Event("mfgd-consent-update"));
    }
  };

  if (consent !== "pending") return null;

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 px-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur">
        <p className="text-sm text-slate-600">
          We use essential cookies plus optional analytics (GA4 & Plausible) to understand anonymous traffic trends. No ad-tech, no creepy retargeting. Accept analytics, or keep it essentials-only — totally up to you.
        </p>
        <div className="flex flex-col gap-3 text-sm font-semibold text-slate-900 sm:flex-row">
          <button
            className="inline-flex flex-1 items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-white"
            onClick={() => handleChoice("accepted")}
          >
            Accept analytics
          </button>
          <button
            className="inline-flex flex-1 items-center justify-center rounded-2xl border border-slate-200 px-4 py-3"
            onClick={() => handleChoice("declined")}
          >
            Essentials only
          </button>
        </div>
        <p className="text-xs text-slate-400">You can revisit this choice via the footer link once we wire up the full preference centre.</p>
      </div>
    </div>
  );
}
