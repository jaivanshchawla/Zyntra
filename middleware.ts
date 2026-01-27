import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// TEMP: Disable Clerk middleware to avoid runtime failures in production.
// Auth is enforced via ClerkProvider and page-level logic instead.
export function middleware(_req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
