import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['xm5pqtm1-5000.euw.devtunnels.ms'],
  },
};

export default withNextIntl(nextConfig);
