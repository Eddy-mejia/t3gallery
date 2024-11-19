// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth(); // Resolve the promise to get the auth object

  if (isProtectedRoute(request) && !userId) {
    throw new Error('Unauthorized'); // Or redirect to login
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
