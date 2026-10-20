import Script from "next/script";

/**
 * Loads the Google AdSense script site-wide.
 *
 * Does nothing until NEXT_PUBLIC_ADSENSE_CLIENT_ID is set in your
 * environment variables — this keeps the site fully functional (and the
 * build from breaking) before you have an AdSense publisher ID.
 *
 * Once approved:
 * 1. Get your publisher ID from AdSense (looks like "ca-pub-1234567890123456")
 * 2. Add it to your environment variables (Vercel: Project Settings → Environment Variables):
 *      NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-1234567890123456
 * 3. Redeploy — the script below will start loading automatically.
 * 4. Turn on "Auto ads" in your AdSense dashboard for the simplest setup,
 *    or use the <AdUnit /> component for manual ad placements.
 */
export default function AdSenseScript() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  if (!client) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
