import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["storage.googleapis.com", "res.cloudinary.com"],
  },
};

export default nextConfig;
