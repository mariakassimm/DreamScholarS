/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static export: produces a plain HTML/CSS/JS "out/" folder with no
  // Node server required. This is what makes the site deployable to
  // Hostinger shared hosting (or any static host) by simply uploading the
  // files — it also still works fine on Vercel/Netlify.
  output: "export",

  images: {
    // Static export can't run Next's server-side Image Optimization API
    // (there's no server). Images are served as-is from their original
    // URLs instead, which works fine for the external Unsplash images
    // this project uses.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
