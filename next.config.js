/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Comment this out when using hosting that does not require static pages

  async redirects() {
    return [
      {
        source: "/admin-page",
        destination: "https://hawlinbuttzbbq.sanity.studio",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
