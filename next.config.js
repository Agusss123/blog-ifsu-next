/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SITE_NAME: 'Next Mantine',
    BASE_URL: isProd ? process.env.BASE_URL : 'http://localhost:3000',
    API_URL: isProd ? process.env.API_URL : 'http://localhost:1337'
  },
  images: {
    domains: ['localhost']
  }
}

module.exports = nextConfig
