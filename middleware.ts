import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// const isProtectedRoute = createRouteMatcher([
//   '/bookings(.*)',
//   '/checkout(.*)',
//   '/favorites(.*)',
//   '/profile(.*)',
//   '/rentals(.*)',
//   '/reviews(.*)',
// ]);


// export default clerkMiddleware(async (auth, req) => {
//   if (isProtectedRoute(req)) await auth.protect();
// });


const isPublicRoute = createRouteMatcher(['/', '/properties(.*)']);

const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
  console.log("This is admin-user",(await auth()).userId);
  const isAdminUser = (await auth()).userId === process.env.ADMIN_USER_ID;
  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  if (!isPublicRoute(req)) auth.protect();
});




export const config = {
  matcher: [// Skip Next.js internals and all static files, unless found in search params
  '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  // Always run for API routes
  '/(api|trpc)(.*)',],
};

