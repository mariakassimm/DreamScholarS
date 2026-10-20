"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

/**
 * A single manual ad placement. Renders nothing until you've set
 * NEXT_PUBLIC_ADSENSE_CLIENT_ID and created an ad unit in your AdSense
 * dashboard to get a real `slot` ID — this prevents empty/broken ad boxes
 * from showing while you're still waiting on approval.
 *
 * Usage once you have a slot ID:
 *   <AdUnit slot="1234567890" />
 *
 * Tip: don't place these too densely — AdSense policy discourages ad
 * layouts that overwhelm the actual content, and it also hurts user trust
 * and SEO. One or two well-placed units per page is usually plenty to
 * start.
 */
export default function AdUnit({
  slot,
  format = "auto",
  className,
}: {
  slot?: string;
  format?: string;
  className?: string;
}) {
  const insRef = useRef<HTMLModElement>(null);
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (!client || !slot) return;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // AdSense script not yet loaded or blocked — fail silently rather
      // than showing an error to real visitors.
    }
  }, [client, slot]);

  if (!client || !slot) return null;

  return (
    <ins
      ref={insRef}
      className={`adsbygoogle block ${className ?? ""}`}
      style={{ display: "block" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
