use crate::database::init_db;

pub struct AppState {
    pub keycloak_openid_url: String,
    pub keycloak_redirect_uri: String,
    pub keycloak_client_id: String,
    pub keycloak_client_secret: String,

    pub db_pool: sqlx::Pool<sqlx::Postgres>,
}

impl AppState {
    pub async fn new() -> Result<Self, sqlx::Error> {
        let database_url = std::env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");

        // Initialize database and run migrations
        let db_pool = init_db(&database_url).await?;

        Ok(Self {
            keycloak_openid_url: std::env::var("KEYCLOAK_OPENID_URL").unwrap(),
            keycloak_redirect_uri: std::env::var("KEYCLOAK_REDIRECT_URI").unwrap(),
            keycloak_client_id: std::env::var("KEYCLOAK_CLIENT_ID").unwrap(),
            keycloak_client_secret: std::env::var("KEYCLOAK_CLIENT_SECRET").unwrap(),
            db_pool,
        })
    }
}
