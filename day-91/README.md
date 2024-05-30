# Day-91 Task:

## Description
Today's task is to learn about:

- [Static and Dynamic Rendering](https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering)

Continued today's task in day-89 folder

## Static and Dynamic Rendering
In the previous chapter, we fetched data for the Dashboard Overview page. However, we briefly discussed two limitations of the current setup:

1. The data requests are creating an unintentional waterfall.
2. The dashboard is static, so any data updates will not be reflected on your application.

### Here are the topics we’ve covered:

- What static rendering is and how it can improve your application's performance.
- What dynamic rendering is and when to use it.
- Different approaches to make your dashboard dynamic.
- Simulating a slow data fetch to see what happens.

### What is Static Rendering?
With static rendering, data fetching and rendering happens on the server at build time (when you deploy) or during revalidation. The result can then be distributed and cached in a Content Delivery Network (CDN).

**Benefits of Static Rendering:**
- **Faster Websites**: Prerendered content can be cached and globally distributed, ensuring quicker access.
- **Reduced Server Load**: Cached content means the server doesn't have to dynamically generate content for each user request.
- **SEO**: Prerendered content is easier for search engine crawlers to index, improving search engine rankings.

Static rendering is useful for UI with no data or data that is shared across users, such as a static blog post or a product page. It might not be a good fit for a dashboard that has personalized data that is regularly updated.

### What is Dynamic Rendering?
With dynamic rendering, content is rendered on the server for each user at request time (when the user visits the page).

**Benefits of Dynamic Rendering:**
- **Real-Time Data**: Dynamic rendering allows your application to display real-time or frequently updated data. This is ideal for applications where data changes often.
- **User-Specific Content**: It's easier to serve personalized content, such as dashboards or user profiles, and update the data based on user interaction.
- **Request Time Information**: Dynamic rendering allows you to access information that can only be known at request time, such as cookies or the URL search parameters.

### Making the Dashboard Dynamic
By default, @vercel/postgres doesn't set its own caching semantics. This allows the framework to set its own static and dynamic behavior.

You can use a Next.js API called `unstable_noStore` inside your Server Components or data fetching functions to opt out of static rendering.

**Example:**
```javascript
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchRevenue() {
  noStore();
  // ...
}
```
Note: unstable_noStore is an experimental API and may change in the future.

Simulating a Slow Data Fetch
To simulate a slow data fetch, uncomment the console.log and setTimeout inside fetchRevenue():

Example:

```javascript
export async function fetchRevenue() {
  try {
    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
```

Open http://localhost:3000/dashboard/ in a new tab and notice the delayed load. This simulates how your page is blocked while data is fetched.

**Conclusion:** With dynamic rendering, your application is only as fast as your slowest data fetch.