"use client";

import { useState } from "react";

export default function LeadCaptureForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("Send it over");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("Sending...");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("Checklist sent ✔");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Try again");
    }
  }

  return (
    <form className="mt-8 flex flex-col gap-3 md:flex-row" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="you@email.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="h-12 flex-1 rounded-2xl border border-slate-200 px-4 text-base focus:border-slate-400 focus:outline-none"
        required
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-3 text-base font-semibold text-white disabled:opacity-60"
      >
        {message}
      </button>
    </form>
  );
}
