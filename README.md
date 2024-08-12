# blog-ui

UI for `youzarsiph/blog` built using Next.js

## Get started

Make sure that you have `Node.js` installed on your system.

Clone the repo:

```bash
git clone https://github.com/youzarsiph/blog-ui
```

Install dependencies:

```bash
cd blog-ui
npm install
```

Create a file named `.env.local`:

```bash
touch .env.local
```

Open the file and add the following lines:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

You need to setup the [backend](https://github.com/youzarsiph/blog) for the UI to fetch the data. Make sure to follow the instructions in backend `README.md`.

Run the dev server

```bash
npm run dev
```

Now, you are ready to go.
