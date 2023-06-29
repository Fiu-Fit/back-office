/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir:        true,
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/fiufit-e9664.appspot.com/**',
      },
    ],
  },
};

module.exports = nextConfig;
