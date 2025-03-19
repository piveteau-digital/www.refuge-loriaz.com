import withNextIntl from "next-intl/plugin";
const isDev = process.env.NODE_ENV === "development";

const authorizedDomains = [
  ["https", "d22po4pjz3o32e.cloudfront.net"],
  ["https", "aceternity.com"],
  ["https", "thispersondoesnotexist.com"],
  ["https", "images.unsplash.com"],
  ["https", "lh3.googleusercontent.com"],
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
  async rewrites() {
    return [
      {
        source: "/:path/sitemap.xml",
        destination: "/api/:path/sitemap-xml",
      },
      {
        source: "/:locale/dashboard",
        destination: `${process.env.AZBOOKED_APP_URL}/:locale/dashboard`,
      },
      {
        source: "/:locale/dashboard/:path*",
        destination: `${process.env.AZBOOKED_APP_URL}/:locale/dashboard/:path*`,
      },
      {
        source: "/:locale/auth/:path*",
        destination: `${process.env.AZBOOKED_APP_URL}/:locale/auth/:path*`,
      },
      {
        source: "/_next/static/:path*",
        destination: `${process.env.AZBOOKED_APP_URL}/_next/static/:path*`,
        basePath: false,
      },
      {
        source: "/_next/image/:path*", 
        destination: `${process.env.AZBOOKED_APP_URL}/_next/image/:path*`,
        basePath: false,
      },
      {
        source: "/_next/data/:path*",
        destination: `${process.env.AZBOOKED_APP_URL}/_next/data/:path*`, 
        basePath: false,
      },
    ];
  },
  images,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
};

export default withNextIntl("./i18n.ts")(nextConfig);
