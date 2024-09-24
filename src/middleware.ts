import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import cookie from 'cookie';

export function middleware(req: NextRequest) {
  // Extraemos las cookies del request
  const cookies = cookie.parse(req.headers.get('cookie') || '');
  const token = cookies.authToken;

  // Si no hay token, redirigimos al login
  if (!token) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  // Si el token existe, dejamos que el usuario acceda a la página solicitada
  return NextResponse.next();
}

// Definimos en qué rutas se aplicará el middleware (puedes personalizarlo)
export const config = {
  matcher: ['/discover/:path*', '/profile/:path*', '/match/:path*', '/reports/:path*', '/admin/:path*', '/user/:path*', '/detailUser/:path*'], // Protege rutas como /dashboard, /profile, etc.
};
