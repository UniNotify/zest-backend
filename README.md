To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000

```ts
// Add Validation
route.post("/", zValidator("json", userSchema, handleApiError), createUser);

// File upload route
route.post("/upload", async (c) => {
  const body = await c.req.parseBody();
  console.log(body.file); // File | string body['file']
});
```

<!--
This README file includes references to `pgbouncer` and `Cilium`.
`pgbouncer` is a lightweight connection pooler for PostgreSQL,
and `Cilium` is a networking, observability, and security solution for cloud-native environments.
-->
