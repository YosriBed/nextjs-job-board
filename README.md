A simple Nextjs - Apollo app to display jobs provided by [graphql.jobs](https://graphql.jobs/docs/api/)

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Features

| Page | Uri | Type |
|--- |---  |--- |
| Job Board | / | SSR |
| Job Details | /:companySlug/:jobSlug | Incremental SR   |
