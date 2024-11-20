use sqlx::postgres::PgPool;
use sqlx::migrate::MigrateDatabase;
use sqlx::Postgres;

pub mod user;

pub async fn init_db(database_url: &str) -> Result<PgPool, sqlx::Error> {
    // Create database if it doesn't exist
    if !Postgres::database_exists(database_url).await? {
        Postgres::create_database(database_url).await?;
    }

    // Create connection pool
    let pool = PgPool::connect(database_url).await?;

    // Run migrations
    sqlx::migrate!("./migrations")
        .run(&pool)
        .await?;

    Ok(pool)
}
