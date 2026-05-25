import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const isNL = host.includes("conneqtai.nl");
  const pathname = request.nextUrl.pathname;

  if (isNL && !pathname.startsWith("/nl") && !pathname.startsWith("/_next") && !pathname.startsWith("/api")) {
    const url = request.nextUrl.clone();
    url.pathname = "/nl" + (pathname === "/" ? "" : pathname);
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
