import withNextIntl from "next-intl/plugin";
const isDev = process.env.NODE_ENV === "development";

const authorizedDomains = [
  ["https", "d22po4pjz3o32e.cloudfront.net"],
  ["https", "aceternity.com"],
  ["https", "thispersondoesnotexist.com"],
  ["https", "images.unsplash.com"]
];

const images = {
  minimumCacheTTL: isDev ? 0 : 3600,
  formats: ["image/avif", "image/webp"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  remotePatterns: authorizedDomains.map(([protocol, hostname]) => ({
    protocol,
    hostname,
  })),
};

const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path/sitemap.xml",
  //       destination: "/api/:path/sitemap-xml",
  //     },
  //   ];
  // },
  images,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
};


export default withNextIntl("./i18n.ts")(nextConfig);