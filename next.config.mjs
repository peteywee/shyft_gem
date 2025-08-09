// next.config.mjs
/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  // You can add more PWA options here if needed
});

const nextConfig = {
  // Your Next.js config options here
  reactStrictMode: true,
};

export default withPWA(nextConfig);
