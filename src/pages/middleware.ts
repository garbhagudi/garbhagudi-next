import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (url.pathname === "/locations/south-end-circle") {
    url.pathname = "/locations/jayanagar";
    return NextResponse.redirect(url);
  }
}
