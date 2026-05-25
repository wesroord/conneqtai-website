import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const isNL = host === "conneqtai.nl" || host === "www.conneqtai.nl";
  
  if (!isNL) return NextResponse.next();
  
  const pathname = request.nextUrl.pathname;
  
  // Al op /nl pad, laat door
  if (pathname.startsWith("/nl")) return NextResponse.next();
  
  // Rewrite naar /nl equivalent
  const url = request.nextUrl.clone();
  url.pathname = "/nl" + (pathname === "/" ? "" : pathname);
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
