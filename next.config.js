/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.licdn.com'], 
  },
}

module.exports = nextConfig

module.exports = {
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s ease-in-out infinite',
      },
    },
  },
};