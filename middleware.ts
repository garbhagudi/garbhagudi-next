import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const paramsToRemove = [
    'fbclid',
    '_x_tr_sl',
    '_x_tr_tl',
    '_x_tr_hl',
    'siq_ename',
    'siq_utm_source',
    'siq_utm_medium',
    'siq_utm_campaign',
    'siq_utm_term',
    'siq_utm_content',
  ];

  let shouldRedirect = false;

  paramsToRemove.forEach((param) => {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param);
      shouldRedirect = true;
    }
  });

  if (shouldRedirect) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
