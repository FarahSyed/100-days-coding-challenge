# Day-99 Task:

## Description
Today's task is to learn about:

[Adding Metadata](https://nextjs.org/learn/dashboard-app/adding-metadata)

The directives outlined in this README.md file have been translated into code operations within the 'day-89' directory.

## Adding Metadata
Metadata is crucial for SEO and shareability. In this chapter, we'll discuss how you can add metadata to your Next.js application.

### Table of Contents
- [What is Metadata?](https://nextjs.org/learn/dashboard-app/adding-metadata#what-is-metadata)
- [Types of Metadata](https://nextjs.org/learn/dashboard-app/adding-metadata#types-of-metadata)
- [Adding Metadata](https://nextjs.org/learn/dashboard-app/adding-metadata#adding-metadata)
  - [Favicon and Open Graph Image](https://nextjs.org/learn/dashboard-app/adding-metadata#favicon-and-open-graph-image)
  - [Page Titles and Descriptions](https://nextjs.org/learn/dashboard-app/adding-metadata#page-titles-and-descriptions)
- [Practice: Adding Metadata](https://nextjs.org/learn/dashboard-app/adding-metadata#practice-adding-metadata)

### What is Metadata?

In web development, metadata provides additional details about a webpage. Metadata is not visible to users but is embedded within the page's HTML, usually within the `<head>` element. This hidden information is crucial for search engines and other systems that need to understand your webpage's content better.

### Why is Metadata Important?

Metadata plays a significant role in enhancing a webpage's SEO, making it more accessible and understandable for search engines and social media platforms. Proper metadata helps search engines effectively index webpages, improving their ranking in search results. Additionally, metadata like Open Graph improves the appearance of shared links on social media, making the content more appealing and informative for users.

### Types of Metadata

There are various types of metadata, each serving a unique purpose. Some common types include:

- **Title Metadata:** Responsible for the title of a webpage displayed on the browser tab. It's crucial for SEO as it helps search engines understand what the webpage is about.

```html
<title>Page Title</title>
```

- **Description Metadata:** Provides a brief overview of the webpage content and is often displayed in search engine results.

```html
<meta name="description" content="A brief description of the page content." />
```

- **Keyword Metadata:** Includes the keywords related to the webpage content, helping search engines index the page.

```html
<meta name="keywords" content="keyword1, keyword2, keyword3" />
```

- **Open Graph Metadata:** Enhances the way a webpage is represented when shared on social media platforms, providing information such as the title, description, and preview image.

```html
<meta property="og:title" content="Title Here" />
<meta property="og:description" content="Description Here" />
<meta property="og:image" content="image_url_here" />
```

- **Favicon Metadata:** Links the favicon (a small icon) to the webpage, displayed in the browser's address bar or tab.

```html
<link rel="icon" href="path/to/favicon.ico" />
```

### Adding Metadata

Next.js has a Metadata API that can be used to define your application metadata. There are two ways you can add metadata to your application:

1. **Config-based:** Export a static `metadata` object or a dynamic `generateMetadata` function in a `layout.js` or `page.js` file.
2. **File-based:** Next.js has special files for metadata purposes like `favicon.ico`, `apple-icon.jpg`, `opengraph-image.jpg`, `robots.txt`, and `sitemap.xml`.

### Favicon and Open Graph Image

In your `/public` folder, you'll notice you have two images: `favicon.ico` and `opengraph-image.jpg`. Move these images to the root of your `/app` folder.

Next.js will automatically identify and use these files as your favicon and OG image. You can verify this by checking the `<head>` element of your application in dev tools.

### Page Titles and Descriptions

You can include a metadata object from any `layout.js` or `page.js` file to add additional page information like title and description. Any metadata in `layout.js` will be inherited by all pages that use it.

**Root Layout Metadata:**

```typescript
// /app/layout.tsx

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

To add a custom title for a specific page, add a metadata object to the page itself:

### Page-specific Metadata:
```typescript
// /app/dashboard/invoices/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices | Acme Dashboard',
};
```

To avoid repeating the title on every page, use the `title.template` field in the metadata object:

```typescript
// /app/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
```

Then, for the invoices page:
```typescript
// /app/dashboard/invoices/page.tsx

export const metadata: Metadata = {
  title: 'Invoices',
};
```

### Practice: Adding Metadata
Now that you've learned about metadata, practice by adding titles to your other pages:

- /login page
- /dashboard/ page
- /dashboard/customers page
- /dashboard/invoices/create page
- /dashboard/invoices/[id]/edit page

The Next.js Metadata API is powerful and flexible, giving you full control over your application's metadata. Here, we've shown you how to add some basic metadata, but you can add multiple fields, including `keywords`, `robots`, `canonical`, and more. Feel free to explore the documentation, and add any additional metadata you want to your application.