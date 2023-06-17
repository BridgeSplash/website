/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/donate",
        destination: "https://donate.stripe.com/7sI14a13paAb7TO9AA",
        permanent: true,
      },
      {
        source: "/store",
        destination: "https://store.bridgesplash.net",
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;
