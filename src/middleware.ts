import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') || '').split(':')[0].toLowerCase();
  if (host === 'paripoorna.garbhagudi.com' && request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(
      new URL(`/features/paripoorna${request.nextUrl.search}`, request.url)
    );
  }

  return NextResponse.next();
}
