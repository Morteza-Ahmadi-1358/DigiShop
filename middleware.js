import { NextResponse } from "next/server"

export const config = {
    matcher: ['/admin/:path*']
}

export default function middleware(request) {
    if (request.cookies.get('jwt') === undefined) {
        return NextResponse.redirect('http://localhost:3000/admin/login')
    }
}