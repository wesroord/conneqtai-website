import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const isNL = host === "conneqtai.nl" || host === "www.conneqtai.nl";
  const pathname = request.nextUrl.pathname;

  if (isNL && !pathname.startsWith("/nl")) {
    const url = request.nextUrl.clone();
    url.pathname = "/nl" + (pathname === "/" ? "" : pathname);
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
