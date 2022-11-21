/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // env variabel
  // env bisa diambil di file lain dengan cara: process.env.NAMA_ENV
  // untuk bisa mengakses process.env.NAMA_ENV, harus membuat file .env.local atau .env di root project
  env: {
    SITE_NAME: 'Next Mantine',
    BASE_URL: isProd ? process.env.BASE_URL : 'http://localhost:3000',
    API_URL: isProd ? process.env.API_URL : 'http://localhost:1337'
  },
  images: {
    // domain yang diizinkan untuk menggunakan next/image
    domains: ['localhost']
  }
}

module.exports = nextConfig
