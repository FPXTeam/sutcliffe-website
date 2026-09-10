"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} aria-describedby="form-status">
      <label>First name<input required autoComplete="given-name" type="text" name="firstName" /></label>
      <label>Last name<input required autoComplete="family-name" type="text" name="lastName" /></label>
      <label className="full">Work email<input required autoComplete="email" type="email" name="email" /></label>
      <label className="full">Company<input autoComplete="organization" type="text" name="company" /></label>
      <label className="full">Timber requirement<textarea required name="message" rows={6} /></label>
      <input className="hp-field" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <p className="contact-privacy-note">We use the information you provide to respond to your enquiry. See our <a href="/privacy">Privacy Policy</a>.</p>
      <button className="button button-dark" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry ↗"}
      </button>
      <p id="form-status" className={`form-status ${status}`} aria-live="polite">
        {status === "success" && "Thanks. Your enquiry has been sent to the Sutcliffe Trading team."}
        {status === "error" && "We could not send that enquiry. Please email sales@sutcliffetrading.com directly."}
      </p>
    </form>
  );
}
