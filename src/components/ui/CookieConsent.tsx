"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "dreamscholar-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage unavailable (e.g. blocked); default to not showing
      // rather than risking a broken banner.
    }
  }, []);

  function handleChoice(choice: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200 bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-container flex-col items-start gap-4 px-5 py-5 sm:flex-row sm:items-center sm:px-8">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
          <Cookie className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="flex-1 text-sm leading-relaxed text-ink-soft">
          We use cookies to run this site and, where enabled, to show
          relevant advertising. See our{" "}
          <Link href="/privacy" className="text-primary underline hover:no-underline">
            Privacy Policy
          </Link>{" "}
          to learn more or to opt out of personalized ads.
        </p>
        <div className="flex flex-shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={() => handleChoice("declined")}>
            Decline
          </Button>
          <Button size="sm" onClick={() => handleChoice("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
