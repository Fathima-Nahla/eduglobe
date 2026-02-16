/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },

  async redirects() {
    return [
      {
        source: "/economics",
        destination: "/subjects-we-offer/economics",
        permanent: true,
      },
      {
        source: "/english",
        destination: "/subjects-we-offer/english",
        permanent: true,
      },
      {
        source: "/mathematics",
        destination: "/subjects-we-offer/mathematics",
        permanent: true,
      },
      {
        source: "/science",
        destination: "/subjects-we-offer/science",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
