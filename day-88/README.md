# Day-88 Task:

## Description
Today's task is to learn about:

- [Creating Layouts and Pages](https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages)
- [Navigating Between Pages](https://nextjs.org/learn/dashboard-app/navigating-between-pages)


## Creating Layouts and Pages:
Creating layouts and pages in Next.js involves structuring your application in a modular and reusable way. Here are the key concepts covered:

1. **Page Components**:
   - How to create page components in the `pages` directory.
   - Understanding the file-based routing system in Next.js, where each file in the `pages` directory automatically becomes a route.

2. **Custom App Component**:
   - Using the `_app.js` file to customize the default App component.
   - How to add global styles and wrap page components with layout components.

3. **Layouts**:
   - Creating reusable layout components to avoid code duplication.
   - Wrapping pages with layout components to provide a consistent look and feel across different parts of the application.

4. **Dynamic Routing**:
   - Creating dynamic routes using the file naming conventions with brackets (e.g., `[id].js`).
   - Fetching data for dynamic routes and rendering content based on URL parameters.

## Navigating Between Pages:
Navigating between pages in Next.js involves using the built-in Link component for client-side navigation. Here are the key concepts covered:

1. **Link Component**:
   - Using the `Link` component from `next/link` for client-side transitions between pages.
   - Understanding how to create links and ensure that navigation is fast and without a full page reload.

2. **Programmatic Navigation**:
   - Using the `useRouter` hook from `next/router` for programmatic navigation.
   - Implementing navigation actions such as `router.push` and `router.replace` to navigate between pages based on user interactions or application logic.

3. **Active Links**:
   - Styling active links to indicate the current page or section the user is on.
   - Using router information to conditionally apply styles to links based on the active route.

By understanding these concepts, you can create a well-structured, easy-to-navigate Next.js application that provides a smooth user experience.