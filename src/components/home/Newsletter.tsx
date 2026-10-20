"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(500px circle at 20% 20%, rgba(37,99,235,0.35), transparent), radial-gradient(500px circle at 80% 80%, rgba(124,58,237,0.3), transparent)",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">
              Never miss a deadline
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/70">
              Get new fully funded scholarships and application tips delivered
              to your inbox every week.
            </p>

            {submitted ? (
              <p className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm text-white">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                You&apos;re subscribed. Watch your inbox for the next update.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="border-white/10 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/20"
                />
                <Button type="submit" className="flex-shrink-0">
                  Subscribe
                </Button>
              </form>
            )}
            <p className="mt-4 text-xs text-white/50">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
