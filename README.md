# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Setup

```bash
# Create .env file
cp .env.example .env

# Update configs in .env file

# Push prisma schema to database
pnpm prisma db push

# Install dependencies
pnpm install
```

## Run

```bash
# Start dev server
pnpm dev

# Start production
pnpm start
```

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
