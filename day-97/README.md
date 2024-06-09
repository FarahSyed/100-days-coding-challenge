# Day-97 Task:

## Description
Today's task is to learn about:

- [Improving Accessibility](https://nextjs.org/learn/dashboard-app/improving-accessibility)

The directives outlined in this README.md file have been translated into code operations within the 'day-89' directory.

## Improving Accessibility
In this chapter, we will focus on form validation, handling form errors with accessibility in mind, and using ESLint to catch accessibility issues early. Here are the main topics covered:

- Using `eslint-plugin-jsx-a11y` with Next.js.
- Implementing server-side form validation.
- Using the React `useFormState` hook to handle form errors and display them to the user.

### What is Accessibility?
Accessibility refers to designing and implementing web applications that everyone can use, including those with disabilities. This chapter provides an overview of accessibility features available in Next.js and best practices to make applications more accessible.

### Using the ESLint Accessibility Plugin in Next.js
Next.js includes `eslint-plugin-jsx-a11y` to help catch accessibility issues early.

### Steps to Add ESLint Accessibility Plugin:
1. Add `next lint` as a script in your `package.json` file:
```json
"scripts": {
    "build": "next build",
    "dev": "next dev",
    "seed": "node -r dotenv/config ./scripts/seed.js",
    "start": "next start",
    "lint": "next lint"
},
```
2. Run the following command in your terminal:
```bash
npm run lint
```

### Example of Linting for Accessibility:
If you remove the `alt` prop from an image in `/app/ui/invoices/table.tsx`:
```jsx
<Image
  src={invoice.image_url}
  className="rounded-full"
  width={28}
  height={28}
  alt={`${invoice.name}'s profile picture`} // Delete this line
/>
```

Running `npm run lint` again will show a warning:
```bash
Warning: Image elements must have an alt prop, either with meaningful text, or an empty string for decorative images. jsx-a11y/alt-text
```

### Improving Form Accessibility
#### Key Practices for Accessible Forms:
1. **Semantic HTML:** Use elements like `<input>`, `<option>`, etc., instead of `<div>`.
2. **Labelling:** Include `<label>` and `htmlFor` attributes to ensure form fields have descriptive text labels.
3. **Focus Outline:** Style fields to show an outline when in focus.


### Form Validation
#### Client-Side Validation
Add the `required` attribute to form elements:
```jsx
// /app/ui/invoices/create-form.tsx
<input
  id="amount"
  name="amount"
  type="number"
  placeholder="Enter USD amount"
  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
  required
/>
```

#### Server-Side Validation
1. Set Up `useFormState` Hook:
```jsx
'use client';

import { useFormState } from 'react-dom';
import { createInvoice } from '@/app/lib/actions';

export default function Form({ customers }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInvoice, initialState);

  return <form action={dispatch}>...</form>;
}
```

2. Update Server Action for Validation:
```typescript
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  customerId: z.string().nonempty({ message: 'Please select a customer.' }),
  amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], { message: 'Please select an invoice status.' }),
});

export async function createInvoice(prevState, formData) {
  const validatedFields = FormSchema.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`INSERT INTO invoices (customer_id, amount, status, date) VALUES (${customerId}, ${amountInCents}, ${status}, ${date})`;
  } catch (error) {
    return { message: 'Database Error: Failed to Create Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
```

3. Display Errors in the Form Component:
```jsx
<form action={dispatch}>
  <div className="rounded-md bg-gray-50 p-4 md:p-6">
    <div className="mb-4">
      <label htmlFor="customer" className="mb-2 block text-sm font-medium">
        Choose customer
      </label>
      <div className="relative">
        <select
          id="customer"
          name="customerId"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
          aria-describedby="customer-error"
        >
          <option value="" disabled>Select a customer</option>
          {customers.map((name) => (
            <option key={name.id} value={name.id}>{name.name}</option>
          ))}
        </select>
      </div>
      <div id="customer-error" aria-live="polite" aria-atomic="true">
        {state.errors?.customerId && state.errors.customerId.map((error) => (
          <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
        ))}
      </div>
    </div>
    <!-- Repeat for other fields -->
  </div>
</form>
```

##### Additional Aria Labels:
- `aria-describedby="customer-error"`: Links the input with its error message.
- `aria-live="polite"`: Notifies users of changes politely.

#### Practice: Adding Aria Labels
Apply the same logic to the remaining form fields and display a message at the bottom if any fields are missing. Run `npm run lint` to check for accessibility.

### Conclusion
Using ESLint for accessibility, implementing server-side validation, and enhancing form error handling with accessibility in mind are crucial steps in creating accessible and robust web applications.