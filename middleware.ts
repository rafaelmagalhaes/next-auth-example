import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  let token = request.cookies.get('token')?.value
  const allowedRoutes = ['/auth/signin', '/auth/register']
  const isRouteAllowed = allowedRoutes.some((prefix) => pathname.startsWith(prefix))

  //ignore routes starting with api and _next
  if (
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/')
  ) {
    return NextResponse.next()
  }
  console.log('-> pathname', pathname)
  console.log('-> token', token)

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
    return NextResponse.redirect(new URL('/', request.url))
  }
}
