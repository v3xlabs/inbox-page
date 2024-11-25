# Inbox Engine

## Developing Locally

First copy your `.env.example` file to `.env` and supply the required values.

```bash
# Start the development environment
make dev-up
```

You should then be able to access [postgres](http://localhost:5432) and [keycloak](http://localhost:8080).

### TODO

- Keycloak needs to be provisioned with a user account
- Keycloak needs to be provisioned with a custom "Client Scope" so it outputs "audience" / "sub" claims by default
