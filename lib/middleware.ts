import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set(
    "Content-Security-Policy",
    `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googleapis.com;
      style-src 'self' 'unsafe-inline' *.googleapis.com;
      img-src 'self' data: *.googleapis.com *.gstatic.com;
      frame-src 'self' *.google.com;
      connect-src 'self' *.googleapis.com;
    `
      .replace(/\s+/g, " ")
      .trim()
  );

  return response;
}

export const config = {
  matcher: "/:path*",
};
