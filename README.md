This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started to run app locally

Make sure you have at least node 18 and yarn installed, if not use nvm [https://github.com/nvm-sh/nvm?tab=readme-ov-file#about](https://github.com/nvm-sh/nvm?tab=readme-ov-file#about)

First, add dependencies

```bash
 yarn install
```

Then, run the development server :

```bash
yarn run dev
```

This should open app on [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting Started to run app with Dockerization do an exact copy and paste on your terminal on the root

Make sure you have docker installed

copy this command and paste it in your terminal DO NOT FORGET "." at last

```bash
docker build -t nextjs-blog .
```

Then run this command and you

```bash
docker run -p 3000:3000 nextjs-blog
```

if you access [http://localhost:3000](http://localhost:3000) , you will see your working app!

## Getting Started to run app deployed version on vercel

Just go to [next-blog](https://next-blog-tau-lemon.vercel.app) and you should see the app running

## About the app

Blog page with a home where I show a home headline and all the fetched blogs from SANITY, shown blogs are clickable so you get routed to individual blog page this page fetches the article details by slug and also I show latest articles out of simplicity with no filters, app is responsive and made with tailwind also SANITY was the CMS I chose to fetch data and display it

## Some considerations

```bash
cd blog yarn install
```

Then

```bash
yarn run dev
```

open [http://localhost:3333/](http://localhost:3333/) you will see sanity studio for this you need at least node 20
Out of simplicity there is no need env variables its a TRIAL
