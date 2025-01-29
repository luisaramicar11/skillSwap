import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
function isValidToken(token: string) {
  const payload = JSON.parse(atob(token.split('.')[1])); // Decodifica el payload del JWT
  return payload.exp > Date.now() / 1000; // Verifica si no ha expirado
}
export function middleware(req: NextRequest) {
  console.log('Middleware ejecutado en:', req.url);
  console.log('Headers:', req.headers.get('cookie'));

  const token = req.cookies.get('authToken')?.value;
  console.log(token, "token next")
  // Si no hay token, redirigimos al login
  if (!token || token.trim() === "" || !isValidToken(token)) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  // Si el token existe, dejamos que el usuario acceda a la página solicitada
  return NextResponse.next();
}

// Definimos en qué rutas se aplicará el middleware
export const config = {
  matcher: [
    '/user/:path*',   // Protege todas las rutas bajo /user/
    '/admin/:path*',  // Protege todas las rutas bajo /admin/
  ],
};