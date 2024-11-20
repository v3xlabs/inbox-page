#!/bin/bash
set -e

# PGPASSWORD
export PGPASSWORD=$POSTGRES_PASSWORD

psql -v ON_ERROR_STOP=0 -h postgres --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    SELECT 'CREATE DATABASE inbox_dev'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'inbox_dev')\gexec

    SELECT 'CREATE DATABASE keycloak'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'keycloak')\gexec
EOSQL
