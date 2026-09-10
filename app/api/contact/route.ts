import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
function clean(value: unknown, max = 4000) { return String(value ?? "").trim().slice(0, max); }

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (clean(body.website)) return NextResponse.json({ ok: true });
    const firstName = clean(body.firstName, 100);
    const lastName = clean(body.lastName, 100);
    const email = clean(body.email, 320);
    const company = clean(body.company, 200);
    const message = clean(body.message, 5000);
    if (!firstName || !lastName || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
    }
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL || "sales@sutcliffetrading.com";
    const from = process.env.CONTACT_FROM || "website@sutcliffetrading.com";
    if (!apiKey) return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    const submitted = new Intl.DateTimeFormat("en-NZ", { dateStyle: "medium", timeStyle: "short", timeZone: "Pacific/Auckland" }).format(new Date());
    const text = ["New Sutcliffe Trading website enquiry", "", `Name: ${firstName} ${lastName}`, `Email: ${email}`, `Company: ${company || "Not provided"}`, `Submitted: ${submitted}`, "", "Timber requirement:", message].join("\n");
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: `Sutcliffe Trading Website <${from}>`, to: [to], reply_to: email, subject: `New website timber enquiry${company ? ` - ${company}` : ""}`, text }),
    });
    if (!response.ok) {
      console.error("Resend contact error", response.status, await response.text());
      return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ error: "Unable to process enquiry." }, { status: 500 });
  }
}
