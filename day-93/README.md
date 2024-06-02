# Day-93 Task:

## Description
Today's task is to learn about:

- [Partial Prerendering](https://nextjs.org/learn/dashboard-app/partial-prerendering)

Continued today's task in day-89 folder

## Partial Prerendering
Partial Prerendering is an experimental feature introduced in Next.js 14. Here's what it entails:

### What Partial Prerendering Is:
- It allows rendering of a route with a static loading shell while keeping some parts dynamic.
- Combines static edge delivery with fully dynamic capabilities.

### How Partial Prerendering Works:
- Utilizes React's Concurrent APIs and Suspense to defer rendering parts of the application.
- At build time, static parts are prerendered, and dynamic parts load asynchronously when requested.
- Suspense is used to distinguish static and dynamic parts of a route.

### Combining Static and Dynamic Content:
- Not all routes are fully static or dynamic; a mix can optimize performance.
- Example: An e-commerce site can prerender most of the product page and fetch user-specific data dynamically.

### Good to Know:
- Partial Prerendering does not yet apply to client-side navigations. This is being actively worked on.
- Partial Prerendering is designed for the Node.js runtime only. Using the subset of the Node.js runtime is not needed when you can instantly serve the static shell.
- Experimental and not suitable for production.
- Enable Partial Prerendering in `next@canary` with the `ppr` flag in `next.config.js`.

### Next.js Partial Prerendering and Dependency Resolution

If you've enabled partial prerendering in Next.js with the `ppr` flag in `next.config.js`, you might encounter npm errors like `ETARGET` or `ERESOLVE` due to incompatible dependencies. To resolve this:

- Upgrade your React version to `"react": "19.0.0-rc-f994737d14-20240522"` to align with Next.js requirements.
- Resolve potential dependency conflicts by running `npm config set legacy-peer-deps true`.
- This combination can optimize server-side rendering performance and resolve dependency issues effectively.

### Summary:
To recap a few things I've done to optimize data fetching in my application:

- Created a database in the same region to reduce latency.
- Fetched data on the server with React Server Components.
- Used SQL efficiently to reduce data transfer.
- Parallelized data fetching where appropriate.
- Implemented Streaming to allow UI interaction before full data loading.
- Prepared routes for Partial Prerendering by moving data fetching to necessary components.