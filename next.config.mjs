/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: process.env.NEXT_LOCAL_BACKEND_DOMAIN,
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },

      // Production API / Image Server
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_BACKEND_DOMAIN, // ← replace with your real backend domain
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
