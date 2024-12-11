import createMiddleware from "next-intl/middleware";
import { localePrefix, locales, pathnames, defaultLocale } from "@/navigation";
import { NextResponse, type NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
  pathnames,
});

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  const headers = new Headers();

  headers.set("Accept-Encoding", "brotli, gzip, deflate, br, zstd");
  headers.set("Content-Encoding", "brotli, gzip, deflate, br, zstd");

  request.headers.set("Accept-Encoding", "brotli, gzip, deflate, br, zstd");
  request.headers.set("Content-Encoding", "brotli, gzip, deflate, br, zstd");

  NextResponse.next({
    headers,
  });

  return response;
}

export const config = {
  // matcher: ['/', '/(fr|en)/:path*'],
  matcher: ["/((?!api|_next|.*\\..*).*)"],
  // matcher: ["/((?!api|_next|.*\\..*).*)"],
};
