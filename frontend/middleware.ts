import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the token from cookies
  const token = request.cookies.get('token')?.value;

  // Protected routes
  const protectedRoutes = ['/dashboard'];
  const isProtectedRoute = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  );

  // Auth routes (redirect to dashboard if already logged in)
  const authRoutes = ['/login', '/signup', '/forgot-password', '/reset-password', '/verify-email'];
  const isAuthRoute = authRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    // Redirect to login if trying to access protected route without token
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuthRoute && token) {
    // Redirect to dashboard if trying to access auth routes while logged in
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
