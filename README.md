# Starter project for Next.js with App Router + Material UI using TypeScript

Mix of [Create Next App](https://nextjs.org/docs/pages/api-reference/create-next-app) and [MUI](https://mui.com) with set of reusable components and utilities to build professional NextJS application faster.

- [Source Code](https://github.com/karpolan/nextjs-mui-starter-ts)
- [Online Demo](https://nextjs-mui-starter-ts.vercel.app)

_Warning: if your are planning to use **Pages Router** (not **App Router**) then use [this template](https://github.com/karpolan/nextjs-with-pages-mui-starter-ts)_

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run lint` or `yarn lint`

Checks the code for errors and missing things

### `npm run format` or `yarn format`

Formats the code according to `./prettierrc.js` config

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.

### `npm run build` or `yarn build`

Builds the app for production or local development to the `.next` folder.

### `yarn build:static` or `npm run build:static`

_Note: this is deprecated way to build the Next.js app!_

Builds the SSG (static site generator) version of the app in the `out` folder.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation]<https://nextjs.org/docs/pages/building-your-application/deploying>) for more details.

## Other tools that I am trying during development

- Copilot - AI pair programmer from GitHub
- Github Actions - CI/CD
- Visual Studio Code - IDE
- Prettier - code formatter
- ESLint - code linter
- Jest - unit tests - unstable for me in VSCode

### What is missing?

- E2E tests - suggest Cypress
- Backend API - use Firebase?

## Local problems

### For some reason generalData is not traced in debugger

If the break is set up on layout.tsx:20 - generalData is not available in debugger although it works in runtime



