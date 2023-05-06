/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_BASE_URL: 'http://localhost:4000/'
  }
}

module.exports = nextConfig
