import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['pt-br', 'en' ],

  // Used when no locale matches
  defaultLocale: 'pt-br'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|pt-br)/:path*']
};