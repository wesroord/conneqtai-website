import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const isNL = host.includes(".nl");
  const url = request.nextUrl.clone();
  
  if (isNL && !url.pathname.startsWith("/nl")) {
    url.pathname = "/nl" + url.pathname;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
