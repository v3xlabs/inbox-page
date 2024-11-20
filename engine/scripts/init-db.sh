#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE IF NOT EXISTS inbox_dev;
    CREATE DATABASE IF NOT EXISTS inbox_test;
EOSQL
