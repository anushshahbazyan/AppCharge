This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

In order to start with the application, run the following:
```
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Other commands available:

```
npm run lint
```

Lints the application files

```
npx test
```

Runs jest test cases

```
npm run build
```

Creates production build

```
npm run start
```

Starts application in production mode

The application showcases a simplest product storefront page with product detailed view.
Key points:
1. responsiveness implemented with tailwind,
2. OpenGraph images/metadata generated for each product, implemented using @vercel/og
3. error handling using error boundaries
4. test cases checking for some basic cases to be working

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.