# Day-90 Task:

## Description
Today's task is to learn about:

- [Fetching Data](https://nextjs.org/learn/dashboard-app/fetching-data)

## Fetching Data

In this task, we explored different methods to fetch data in a Next.js application and built out the dashboard overview page. Here’s a summary of the key concepts:

### Choosing How to Fetch Data

1. **API Layer**
   - **Use Cases**: When using third-party services or fetching data from the client to avoid exposing database secrets.
   - **Implementation**: In Next.js, you can create API endpoints using Route Handlers.

2. **Database Queries**
   - **Use Cases**: When interacting directly with your database in a full-stack application.
   - **Tools**: Use SQL or an ORM like Prisma.

### Using Server Components to Fetch Data

- **Benefits**:
  - Supports promises and async/await syntax.
  - Executes on the server, keeping expensive data fetches and logic server-side.
  - Allows querying the database directly without an additional API layer.

### Using SQL

- **Reasons for SQL**:
  - Industry standard for querying relational databases.
  - Provides fundamental understanding applicable to other tools.
  - Offers versatility and protection against SQL injections.

### Fetching Data for the Dashboard Overview Page

#### Step-by-Step Implementation:

1. **Create SQL Queries**:
   - Use the Vercel Postgres SDK and SQL for database queries.
   - Example query in `/app/lib/data.ts`:
     ```javascript
     import { sql } from '@vercel/postgres';
     // Fetch the last 5 invoices, sorted by date
     const data = await sql`
       SELECT invoices.amount, customers.name, customers.image_url, customers.email
       FROM invoices
       JOIN customers ON invoices.customer_id = customers.id
       ORDER BY invoices.date DESC
       LIMIT 5`;
     ```

2. **Fetch Data for Components**:
   - **RevenueChart Component**:
     ```javascript
     import { fetchRevenue } from '@/app/lib/data';
     
     export default async function Page() {
       const revenue = await fetchRevenue();
       // ...other code
     }
     ```
   - **LatestInvoices Component**:
     ```javascript
     import { fetchLatestInvoices } from '@/app/lib/data';
     
     export default async function Page() {
       const latestInvoices = await fetchLatestInvoices();
       // ...other code
     }
     ```

3. **Practice Fetching Data for `<Card>` Components**:
   - **Total amount of invoices collected**
   - **Total amount of invoices pending**
   - **Total number of invoices**


### Understanding Request Waterfalls
**Request Waterfalls:** Sequence of network requests dependent on each other.
#### Example:
```javascript
const revenue = await fetchRevenue();
const latestInvoices = await fetchLatestInvoices();
```

### Parallel Data Fetching
**Solution:** Use Promise.all() or Promise.allSettled() to initiate all data requests at the same time.
#### Example:
``` javascript
export async function fetchCardData() {
  const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
  const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
  const invoiceStatusPromise = sql`
    SELECT
      SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
      SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
    FROM invoices`;

  const data = await Promise.all([
    invoiceCountPromise,
    customerCountPromise,
    invoiceStatusPromise,
  ]);
  // ...process data
}
```

By understanding and implementing these methods, we can efficiently fetch and manage data in our Next.js applications, ensuring a seamless and dynamic user experience.