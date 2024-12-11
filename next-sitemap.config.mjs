/** @type {import('next-sitemap').IConfig} */

import locales from "./config/i18n/locales.mjs";

const DEFAULT_PROD_URL = "https://www.refuge-loriaz.com";

const nextSiteMapConfig = {
  robotsTxtOptions: {
    additionalSitemaps: locales.map(
      (locale) =>
        `${process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_PROD_URL}/sitemap-${locale}.xml`,
    ),
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_PROD_URL,
  generateRobotsTxt: true,
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"],
  alternateRefs: ["fr", "en"],
};

export default nextSiteMapConfig;
