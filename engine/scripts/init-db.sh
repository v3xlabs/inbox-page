#!/bin/bash
set -e

psql -v ON_ERROR_STOP=0 -h postgres --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    SELECT 'CREATE DATABASE inbox_dev'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'inbox_dev')\gexec
    
    SELECT 'CREATE DATABASE inbox_test'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'inbox_test')\gexec
EOSQL
