/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {

  },
  async rewrites() {
    return [
      {
        source: '/image/:id',
        destination: '/?image=:id',
      },
    ];
  },
};

module.exports = nextConfig;
