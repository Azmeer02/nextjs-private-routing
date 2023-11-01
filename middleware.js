"use client";

// import { NextResponse } from "next/server";

// const protectedRoutes = {
//   "/events": "AMBASSADOR",
//   "/landing-page": "USER",
// };

// export function middleware(req) {
//   const userCookie = req.cookies.get("user");

//   // If the route is a protected route
//   if (protectedRoutes[req.nextUrl.pathname]) {
//     // If cookie does not exist or does not match the required role for that route
//     if (!userCookie || userCookie.value !== protectedRoutes[req.nextUrl.pathname]) {
//       const absoluteURL = new URL("/", req.nextUrl.origin);
//       return NextResponse.redirect(absoluteURL.toString());
//     }
//   }
// }

import { NextResponse } from "next/server";

const protectedRoutes = {
  "/events": "AMBASSADOR",
  "/landing-page": "USER",
};

// Define the default landing pages for each role
const defaultLandingPages = {
  AMBASSADOR: "/events",
  USER: "/landing-page",
};

export function middleware(req) {
  const userCookie = req.cookies.get("user");

  // If the route is a protected route
  if (protectedRoutes[req.nextUrl.pathname]) {
    // If cookie does not exist or does not match the required role for that route
    if (
      !userCookie ||
      userCookie.value !== protectedRoutes[req.nextUrl.pathname]
    ) {
      // Redirect to the default landing page for the user's role
      if (userCookie && defaultLandingPages[userCookie.value]) {
        const redirectURL = new URL(
          defaultLandingPages[userCookie.value],
          req.nextUrl.origin
        );
        return NextResponse.redirect(redirectURL.toString());
      } else {
        // If no user role cookie is found or it's not a known role, redirect to the root path
        const absoluteURL = new URL("/", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
      }
    }
  }
}
