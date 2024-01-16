/** @type {import('next').NextConfig} */
// const nextConfig = {}
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  // Other Next.js configuration ...
  images:{
    domains:["i.imgur.com", "imgur.com", "camo.githubusercontent.com"], // exemplo
  }
});

// module.exports = nextConfig
