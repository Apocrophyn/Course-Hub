import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // List of public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/about',
    '/contact',
    '/courses',
    '/auth/signin',
    '/auth/callback',
    '/api/webhook'
  ]

  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.some(route => 
    req.nextUrl.pathname === route || 
    req.nextUrl.pathname.startsWith('/courses/')
  )

  // If user is not signed in and trying to access a protected route
  if (!session && !isPublicRoute) {
    return NextResponse.redirect(new URL('/auth/signin', req.url))
  }

  // If user is signed in and trying to access auth pages
  if (session && (req.nextUrl.pathname === '/auth/signin')) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
} 