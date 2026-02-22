import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow login page and auth API routes through
  if (pathname === '/dashboard/login' || pathname.startsWith('/api/auth/')) {
    return NextResponse.next();
  }

  // Protect /dashboard/* and /api/dashboard/* routes
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/api/dashboard')) {
    const token = request.cookies.get('dashboard_auth');

    if (!token?.value) {
      if (pathname.startsWith('/api/dashboard')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/dashboard/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/dashboard/:path*'],
};
