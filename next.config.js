/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
  './src/i18n.ts'
);

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  env: {
    _next_intl_trailing_slash: 'false'
  }
};

module.exports = withNextIntl(nextConfig);
