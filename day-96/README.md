# Day-96 Task:

## Description
Today's task is to learn about:

[Handling Errors](https://nextjs.org/learn/dashboard-app/error-handling)

Continued today's task in day-89 folder

## Handling Errors
In this chapter, you’ll learn how to handle errors gracefully using JavaScript's `try/catch` statements and Next.js APIs.

### Topics Covered
- Using the `error.tsx` file to catch errors in your route segments and show a fallback UI.
- Using the `notFound` function and `not-found` file to handle 404 errors.

### Adding try/catch to Server Actions
To handle errors in Server Actions, use JavaScript's `try/catch` statements. Here’s an example for the `deleteInvoice` action:

```JavaScript
// /app/lib/actions.ts

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice' };
  }
}
```

### Handling Errors with `error.tsx`

The `error.tsx` file defines a UI boundary for route segments, serving as a catch-all for unexpected errors. Create an `error.tsx` file in your `/dashboard/invoices` folder:

```JavaScript
// /dashboard/invoices/error.tsx

'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void; }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()} className="mt-4 bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-400">
        Try again
      </button>
    </main>
  );
}
```

### Handling 404 Errors with `notFound`
Use the `notFound` function when a resource doesn't exist. In `/dashboard/invoices/[id]/edit/page.tsx`:

```JavaScript
// /dashboard/invoices/[id]/edit/page.tsx

import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  // ...
}
```

Create a `not-found.tsx` file in the `/edit` folder:
```JavaScript
// /dashboard/invoices/[id]/edit/not-found.tsx

import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link href="/dashboard/invoices" className="mt-4 bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-400">
        Go Back
      </Link>
    </main>
  );
}
```