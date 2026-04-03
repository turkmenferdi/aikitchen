import { NextRequest, NextResponse } from 'next/server';
import { languages, defaultLanguage } from '@/i18n/config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already has a locale
  const pathnameHasLocale = languages.some((lang) => pathname.startsWith(`/${lang}`));

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
