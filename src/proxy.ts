import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

// Logged out users can only open these pages
const publicPaths = ["/", "/sign_up", "/sing_in", "/forgot_password"];

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Public page -> let everyone in
    if (publicPaths.includes(pathname)) {
        return NextResponse.next();
    }

    const session = await auth.api.getSession({
        headers: request.headers,
    });

    // Not logged in -> send to sign up page
    if (!session?.user) {
        return NextResponse.redirect(new URL("/sign_up", request.url));
    }

    return NextResponse.next();
}

export const config = {
    // Run on every page except api routes, Next.js internals and static files
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
    ],
};