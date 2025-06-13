/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
    images: {
    domains: ["blob.v0.dev", "hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    unoptimized: true,
  },
}

module.exports = nextConfig 