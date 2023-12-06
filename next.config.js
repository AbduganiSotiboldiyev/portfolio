/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: {
    domains: ['avatars.githubusercontent.com', 'media.graphassets.com'],
 },
 pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
}

module.exports = nextConfig
