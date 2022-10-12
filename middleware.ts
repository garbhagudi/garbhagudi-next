import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl.clone();
  if (pathname == "/locations/south-end-circle") {
    return NextResponse.redirect("/locations/jayanagar");
  }
  return NextResponse.next();
}
