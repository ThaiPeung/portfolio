import { NextRequest, NextResponse } from "next/server";

const AUTH_COOKIE_NAME = "refreshToken";
const AUTH_LOGGED_IN_VALUE = "1";

const PUBLIC_ROUTES = new Set<string>(["/login", "/register"]);

const AUTH_PAGES = ["/login", "/register"];

function isLoggedIn(req: NextRequest): boolean {
  return Boolean(req.cookies.get('refreshToken'));
}

function isAuthPage(pathname: string): boolean {
  return AUTH_PAGES.some(item => pathname.includes(item));
}

function buildRedirectURL(
  req: NextRequest,
  to: string,
  params?: Record<string, string>
) {
  const url = new URL(to, req.url);
  console.log(`url: ${url}, params: ${params}`);
  if (params) {
    for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  }
  return url;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const loggedIn = isLoggedIn(req);

  console.log('loggedIn:', loggedIn)
  console.log('pathname:', pathname)
  console.log('isAuthPage(pathname):', isAuthPage(pathname))
  if (loggedIn && isAuthPage(pathname)) {
    return NextResponse.redirect(new URL("/crud/home", req.url));
  }

  if (PUBLIC_ROUTES.has(pathname)) {
    return NextResponse.next();
  }

  if (!loggedIn && !isAuthPage(pathname)) {
    return NextResponse.redirect(
      new URL("/crud/login", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Protected areas (add/remove as needed)
    "/crud/:path*",

    // Auth pages (so we can redirect logged-in users away)
    "/crud/login",
    "/crud/register",
  ],
};
