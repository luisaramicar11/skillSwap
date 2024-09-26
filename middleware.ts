import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('Middleware ejecutado en:', req.url);
  const token = req.cookies.get('authToken')?.value;
  console.log(token, "token next")

  if (!token) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

 
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/user/:path*',  
    '/admin/:path*',  
  ],
};

