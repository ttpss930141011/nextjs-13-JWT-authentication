# nextjs-13-JWT-authentication

## Project Overview

This project helps me quickly familiarize and review [middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware) in Next.js 13, JWS and others JWT-related RFCs in [jose](https://github.com/panva/jose), basic concepts in [prisma](https://www.prisma.io/docs/concepts/overview/what-is-prisma), and [Vercel Postgre](https://vercel.com/docs/storage/vercel-postgres).

---

[![License MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](./LICENSE) 
<img src="https://forthebadge.com/images/badges/made-with-typescript.svg" alt="Made with TypeScript" height="28" /> 
<a href="https://vercel.com/new/clone?repository-url=https://github.com/ttpss930141011/nextjs-13-JWT-authentication&env=NEXT_PUBLIC_JWT_SECRET_KEY,NEXT_PUBLIC_JWT_EXPIRES_IN"><img src="./public/powered-by-vercel.svg" alt="Powered by Vercel" height="29" /></a>


---

## Installation Guide

First, run the development server:

-   Create Vercel Postgre on [here](https://vercel.com/dashboard/vercel/stores).
-   Clone this repo as:
    ```
    git clone https://github.com/ttpss930141011/nextjs-13-JWT-authentication.git
    ```
-   Choose the `.env.local` panel on the `Quickstart` tab and copy that into your local repository path: `./prisma/.env`.
-   Run command to create a new migration file.
    ```
    npx prisma  migrate dev --name init`
    ```
    -   You might find you just can only create the initial migration. That's because when we need to migrate a new schema with creating shadow database, but vercel only allows 1 db for hobby accounts. You can replace the `POSTGRES_URL_NON_POOLING` variable to your own local/cloud database. See more info in the following:
        -   [Error when creating new Prisma migration](https://github.com/vercel/storage/issues/114)
        -   [Prisma migrate does not work with Vercel Postgres](https://github.com/orgs/vercel/discussions/2515)
-   Run command
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
