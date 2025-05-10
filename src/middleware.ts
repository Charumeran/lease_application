import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// 認証が必要なパス
const protectedPaths = [
  '/dashboard',
  '/inventory',
  '/search',
  '/chat',
  '/leases',
];

// パブリックパス
const publicPaths = [
  '/',
  '/auth/login',
  '/auth/signup',
];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // API routes are handled in their respective files
  if (path.startsWith('/api')) {
    return NextResponse.next();
  }

  // Check if the path is public
  if (publicPaths.some(publicPath => path === publicPath)) {
    return NextResponse.next();
  }

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some(protectedPath => 
    path === protectedPath || path.startsWith(`${protectedPath}/`)
  );
  
  // Skip middleware if the path is not protected
  if (!isProtectedPath) {
    return NextResponse.next();
  }

  // Get the auth session
  const token = await getToken({ req: request });
  const isAuthenticated = !!token;

  // If not authenticated and on a protected route, redirect to login page
  if (!isAuthenticated && isProtectedPath) {
    const url = new URL('/auth/login', request.url);
    url.searchParams.set('callbackUrl', encodeURI(request.url));
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// 以下のパスに対してミドルウェアを実行
export const config = {
  matcher: ['/((?!api/auth|_next/static|_next/image|favicon.ico).*)'],
}; 