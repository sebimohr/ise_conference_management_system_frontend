import type {NextRequest} from 'next/server'
import {AUTH_SESSION_KEY} from "@/app/api/Constants";

/**
 * Runs before ach new request.
 * @param request The current request.
 */
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get(AUTH_SESSION_KEY)?.value

  if (currentUser && !request.nextUrl.pathname.startsWith('/')) {
    return Response.redirect(new URL('/', request.url))
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.webp$|.*\\.png$|.*\\.svg$).*)'],
}
