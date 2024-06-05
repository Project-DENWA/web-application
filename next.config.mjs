import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '79.174.80.17',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '3c6czcvp-5000.euw.devtunnels.ms',
        pathname: '/**',
      }
    ]
  },
};

export default withNextIntl(nextConfig);
