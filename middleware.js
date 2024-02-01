import { NextResponse } from 'next/server'

export function middleware(request) {
    const authenticate = request.cookies.get('next-auth.session-token')?.value

    if (authenticate && request.nextUrl.pathname === '/auth/login') {
        return NextResponse.redirect(new URL('/profile', request.url))
    }
    if (authenticate && request.nextUrl.pathname === '/auth/signup') {
        return NextResponse.redirect(new URL('/profile', request.url))
    }
    if (authenticate && request.nextUrl.pathname === '/auth/forgot_password') {
        return NextResponse.redirect(new URL('/profile', request.url))
    }
    if (authenticate && request.nextUrl.pathname === '/auth/reset_password') {
        return NextResponse.redirect(new URL('/profile', request.url))
    }
    if (!authenticate && request.nextUrl.pathname === '/profile') {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }
}

// export const config = {
//     matcher: ['/profile'],
// }
