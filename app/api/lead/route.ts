import { NextResponse } from "next/server";

const CHECKLIST_LINK = "https://myflightgotdelayed.com/resources/delay-compensation-checklist";

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  try {
    const { email } = await request.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const payload = {
      sender: { name: "MyFlightGotDelayed", email: "noreply@myflightgotdelayed.com" },
      to: [{ email }],
      subject: "Your Delay Compensation Checklist",
      htmlContent: `<!doctype html><html><body style="font-family:Arial,sans-serif;">
        <p>Hi there,</p>
        <p>Here’s the quick-start checklist we mentioned:</p>
        <ul>
          <li><a href="${CHECKLIST_LINK}.pdf">Download the PDF version</a></li>
          <li><a href="${CHECKLIST_LINK}-notion">Open the editable Notion template</a></li>
        </ul>
        <p>Save your booking reference, screenshots, and receipts there so partners can fast-track your claim.</p>
        <p>We’ll send one follow-up email with partner options. No spam.</p>
        <p>— MyFlightGotDelayed.com</p>
      </body></html>`,
    };

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(payload),
      // Next.js fetch caching requires next object
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Brevo error", res.status, body);
      return NextResponse.json({ error: "Email send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
