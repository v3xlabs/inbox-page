-- Create a sequence for ID generation
CREATE SEQUENCE user_id_seq;

-- Add migration script here
CREATE TABLE IF NOT EXISTS users (
    -- Using BIGINT for ID with a default that combines timestamp and sequence
    id BIGINT PRIMARY KEY DEFAULT (
        -- Timestamp in milliseconds since 2024-01-01 shifted left 22 bits
        ((EXTRACT(EPOCH FROM (CURRENT_TIMESTAMP - '2024-01-01'::timestamp)) * 1000)::bigint << 22) |
        -- Sequence number in lower 22 bits
        (nextval('user_id_seq') & x'3FFFFF'::bigint)
    ),
    username VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on username for faster lookups
CREATE INDEX idx_users_username ON users(username);

-- Add trigger to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 