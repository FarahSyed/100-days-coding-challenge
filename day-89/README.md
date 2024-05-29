# Day-89 Task:

## Description
Today's task is to learn about:

- [Setting Up Your Database](https://nextjs.org/learn/dashboard-app/setting-up-your-database)

## Setting Up Your Database

### Steps:

1. **Accept the Terms**:
   - When prompted, accept the terms of service.

2. **Assign a Name to Your Database**:
   - Choose a unique name for your database.

3. **Set Database Region**:
   - Ensure your database region is set to Washington D.C (iad1). This is the default region for all new Vercel projects. Placing your database close to your application code reduces latency for data requests.
   - Note: You cannot change the database region once it has been initialized. Set the desired region before creating the database.

4. **Connect to Your Database**:
   - After setting up the database, navigate to the `.env.local` tab.
   - Click `Show secret` and then `Copy Snippet`. Ensure you reveal the secrets before copying them.

5. **Update Environment Variables**:
   - In your code editor, rename the `.env.example` file to `.env`.
   - Paste the copied contents from Vercel into the `.env` file.
   - Important: Ensure `.env` is listed in your `.gitignore` file to prevent exposing your database secrets when pushing to GitHub.

6. **Install Vercel Postgres SDK**:
   - Run the following command to install the Vercel Postgres SDK:
     ```sh
     npm install @vercel/postgres
     ```

7. **Seed Your Database**:
   - Seed your database with initial data using the provided script.
   - The `/scripts` folder in your project contains `seed.js`, which includes instructions for creating and seeding the invoices, customers, user, and revenue tables.
   - To execute the seeding script, add the following line to your `package.json` file:
     ```json
     "scripts": {
       "build": "next build",
       "dev": "next dev",
       "start": "next start",
       "seed": "node -r dotenv/config ./scripts/seed.js"
     }
     ```
   - Run the script using:
     ```sh
     npm run seed
     ```
   - You should see console log messages indicating the script's progress.

### Troubleshooting:

- **Reveal Database Secrets**:
  Ensure you have revealed and copied the database secrets correctly into your `.env` file.

- **Hashing Passwords**:
  If bcrypt isn't compatible with your environment, update the script to use bcryptjs instead.

- **Dropping Tables**:
  If you encounter issues and need to rerun the script, you can drop existing tables using the `DROP TABLE tablename` command in your database query interface. This will delete the tables and all their data. Use this command with caution, especially in production environments.

- **Seek Help**:
  If issues persist, open a discussion on GitHub for further assistance.

### Exploring Your Database:

1. **View Tables**:
   - Go back to Vercel and click `Data` on the sidebar.
   - You should see four tables: `users`, `customers`, `invoices`, and `revenue`.

2. **View Records**:
   - Select each table to view its records and ensure they match the data from `placeholder-data.js`.

3. **Executing Queries**:
   - Switch to the "query" tab to interact with your database using standard SQL commands.
   - For example, to view specific data, you can run the following query:
     ```sql
     SELECT invoices.amount, customers.name
     FROM invoices
     JOIN customers ON invoices.customer_id = customers.id
     WHERE invoices.amount = 666;
     ```

By following these steps, you will successfully set up your database, seed it with initial data, and explore its structure and content.