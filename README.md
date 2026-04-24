# Multi-step Loan Form

React application with a multi-step loan application form. The user fills in personal information, address and employment details, then selects loan parameters and submits the application. Step data is stored on the client side, forms are validated, and the main scenarios are covered by tests.

## Tech Stack

- React 19, TypeScript, Vite
- Material UI
- React Hook Form + Zod
- TanStack Query
- Zustand
- Vitest + Testing Library

## Running the Project

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

After startup, Vite will print the local URL, usually:

```text
http://localhost:3000
```

## Verifying the Project

Run tests:

```bash
npm test
```

Check the production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Docker

Build the Docker image:

```bash
docker build --pull -t loan-app .
```

Run the container:

```bash
docker run --rm -p 8080:80 loan-app
```

After startup, the app will be available at:

```text
http://localhost:8080
```

Check the Nginx configuration inside the image:

```bash
docker run --rm loan-app nginx -t
```
