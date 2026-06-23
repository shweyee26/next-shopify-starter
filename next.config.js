/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    siteTitle: 'Doggy Stickers',
    siteDescription: 'Get some Doggy Stickers!',
    siteKeywords: 'dog, stickers, fun',
    siteUrl: 'https://www.doggystickers.xyz',
    siteImagePreviewUrl: '/images/main.jpg',
    twitterHandle: '@deepwhitman'
  },

  images: {
    domains: ['cdn.shopify.com']
  }
}

module.exports = nextConfig
