const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/miscellaneous",
        destination: "/miscellaneous/uses",
        permanent: true,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
