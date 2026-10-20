"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-soft">
        <CheckCircle2 className="h-10 w-10 text-emerald-500" aria-hidden="true" />
        <h2 className="mt-4 font-display text-xl font-semibold text-ink">
          Message sent
        </h2>
        <p className="mt-2 max-w-sm text-sm text-ink-muted">
          Thanks for reaching out. Our team will get back to you within two
          business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-slate-100 bg-white p-8 shadow-soft"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
          Full Name
        </label>
        <Input id="name" name="name" required placeholder="Jane Doe" />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email Address
        </label>
        <Input id="email" name="email" type="email" required placeholder="you@example.com" />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink">
          Subject
        </label>
        <Input id="subject" name="subject" required placeholder="How can we help?" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us more about your question..."
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100"
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
