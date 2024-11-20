# Database connection string for local development
DATABASE_URL=postgres://postgres:postgres@localhost:5432/inbox_dev

.PHONY: dev-up
dev-up:
	@mkdir -p scripts
	docker compose -f compose.dev.yml up -d
	@echo "Waiting for database initialization..."
	@sleep 5
	@echo "Checking service status..."
	@docker compose -f compose.dev.yml ps
	@echo "Development environment is ready!"
	@echo "Database URL: ${DATABASE_URL}"

.PHONY: dev-reset
dev-reset: dev-down-clean dev-up

.PHONY: dev-down
dev-down:
	docker compose -f compose.dev.yml down

.PHONY: dev-down-clean
dev-down-clean:
	docker compose -f compose.dev.yml down -v

.PHONY: dev-logs
dev-logs:
	docker compose -f compose.dev.yml logs -f

.PHONY: dev-ps
dev-ps:
	docker compose -f compose.dev.yml ps
