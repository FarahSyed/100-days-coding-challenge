# Day-95 Task:

## Description
Today's task is to learn about:

[Mutating Data](https://nextjs.org/learn/dashboard-app/mutating-data)

Continued today's task in day-89 folder

## Mutating Data
In this chapter, we will enhance the Invoices page by adding the ability to create, update, and delete invoices. Key topics covered include:

- React Server Actions for mutating data.
- Working with forms and Server Components.
- Best practices for using FormData, including type validation.
- Revalidating client cache using revalidatePath API.
- Creating dynamic route segments with specific IDs.

### What are Server Actions?
Server Actions run asynchronous code directly on the server, eliminating the need for separate API endpoints. They offer security enhancements by using techniques like POST requests, encrypted closures, strict input checks, error message hashing, and host restrictions.

### Using Forms with Server Actions
In React, the `action` attribute in the `<form>` element can invoke Server Actions, which receive the native FormData object. Example:

```jsx
// Server Component
export default function Page() {
  async function create(formData: FormData) {
    'use server';
    // Logic to mutate data...
  }
 
  return <form action={create}>...</form>;
}
```

### Creating an Invoice
Steps to create a new invoice:

1. Create a form to capture user input.
2. Create a Server Action and invoke it from the form.
3. Extract data from formData.
4. Validate and prepare the data.
5. Insert the data into the database.
6. Revalidate the cache and redirect the user.


#### Example:
// /dashboard/invoices/create/page.tsx
```jsx
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          { label: 'Create Invoice', href: '/dashboard/invoices/create', active: true },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
```

### Updating an Invoice
Steps to update an invoice:

1. Create a dynamic route segment with the invoice id.
2. Read the invoice id from the page params.
3. Fetch the specific invoice from the database.
4. Pre-populate the form with invoice data.
5. Update the invoice data in the database.

#### Example:
```jsx
// /dashboard/invoices/[id]/edit/page.tsx
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          { label: 'Edit Invoice', href: `/dashboard/invoices/${id}/edit`, active: true },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
```

### Deleting an Invoice
Wrap the delete button in a <form> element and pass the id to the Server Action using bind:

```jsx
// /app/ui/invoices/buttons.tsx
import { deleteInvoice } from '@/app/lib/actions';

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
 
  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
```

### Server Action Example

```jsx
// /app/lib/actions.ts
'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath, redirect } from 'next/cache';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath('/dashboard/invoices');
}
```

Congratulations! You have implemented create, update, and delete functionalities for invoices using Next.js Server Actions.