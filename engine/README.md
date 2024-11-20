# Inbox Engine

## Developing Locally

First copy your `.env.example` file to `.env` and supply the required values.

Required local dependencies: `curl`, `jq`

```bash
# Start the development environment
make dev-up
make init-keycloak
```

You should then be able to access [postgres](http://localhost:5432) and [keycloak](http://localhost:8080).
