import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useAuthStore } from '~/store/useAuthStore'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  let token = request.cookies.get('token')?.value
  const allowedRoutes = ['/auth/signin', '/auth/register']
  const isRouteAllowed = allowedRoutes.some((prefix) => pathname.startsWith(prefix))
  //ignore routes starting with api and _next (temp solution)
  // matchers in next.config isn't working
  if (
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/')
  ) {
    return NextResponse.next()
  }

  // redirect to login if no token
  if (!token) {
    if (isRouteAllowed) {
      // check if path is allowed
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  //redirect to home page if logged in
  if (isRouteAllowed && token) {
    console.log(useAuthStore.getState().authenticated)
    return NextResponse.redirect(new URL('/', request.url))
  }
}
