import { NextRequest, NextResponse } from 'next/server';
import { languages, defaultLanguage } from '@/i18n/config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // A locale must be the first complete path segment. Prefix matching would make
  // paths such as /enfoo indexable duplicates of /en.
  const firstSegment = pathname.split('/')[1];
  const pathnameHasLocale = languages.includes(firstSegment as (typeof languages)[number]);

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Check if the pathname is a static file or api route
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next();
  }

  // If no locale, redirect to default locale
  return NextResponse.redirect(new URL(`/${defaultLanguage}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!_next|api|.*\\.).*)'],
};
