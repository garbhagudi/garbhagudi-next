import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl.clone();

  console.log({ pathname });

  if (pathname == "/locations/south-end-circle") {
    return NextResponse.redirect("/locations/jayanagar");
  }
  return NextResponse.next();
}
