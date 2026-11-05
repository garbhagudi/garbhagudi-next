import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') || '').split(':')[0].toLowerCase();
  if (host === 'paripoorna.garbhagudi.com' && request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(
      new URL(`/features/paripoorna${request.nextUrl.search}`, request.url)
    );
  }

  // garbhagudi.com/features/paripoorna -> the subdomain (only on the live hosts, so localhost still shows the page)
  const { pathname } = request.nextUrl;
  if (
    (host === 'www.garbhagudi.com' || host === 'garbhagudi.com') &&
    (pathname === '/features/paripoorna' || pathname === '/features/paripoorna/')
  ) {
    return NextResponse.redirect(
      `https://paripoorna.garbhagudi.com/${request.nextUrl.search}`,
      301
    );
  }

  return NextResponse.next();
}
