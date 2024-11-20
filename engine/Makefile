# Database connection string for local development
DATABASE_URL=postgres://postgres:postgres@localhost:5432/inbox_dev

.PHONY: dev-up
dev-up:
	@mkdir -p scripts
	@chmod +x scripts/init-db.sh
	docker compose -f docker-compose.dev.yml up -d
	@echo "Waiting for database to be ready..."
	@sleep 5
	@echo "Development environment is ready!"
	@echo "Database URL: ${DATABASE_URL}"

.PHONY: dev-reset
dev-reset: dev-down-clean dev-up

.PHONY: dev-down
dev-down:
	docker compose -f docker-compose.dev.yml down

.PHONY: dev-down-clean
dev-down-clean:
	docker compose -f docker-compose.dev.yml down -v

.PHONY: dev-logs
dev-logs:
	docker compose -f docker-compose.dev.yml logs -f

.PHONY: dev-ps
dev-ps:
	docker compose -f docker-compose.dev.yml ps
