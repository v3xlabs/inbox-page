use openid::DiscoveredClient;

use crate::database::init_db;

pub struct AppState {
    pub openid_url: String,
    pub openid_redirect_uri: String,
    pub openid_client_id: String,
    pub openid_client_secret: String,
    pub oauth_client: openid::DiscoveredClient,

    pub db_pool: sqlx::Pool<sqlx::Postgres>,
}

impl AppState {
    pub async fn new() -> Result<Self, sqlx::Error> {
        let database_url = std::env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");

        // Initialize database and run migrations
        let db_pool = init_db(&database_url).await?;

        let openid_url = std::env::var("OPENID_URL").unwrap();
        let openid_redirect_uri = std::env::var("OPENID_REDIRECT_URI").unwrap();
        let openid_client_id = std::env::var("OPENID_CLIENT_ID").unwrap();
        let openid_client_secret = std::env::var("OPENID_CLIENT_SECRET").unwrap();
        let openid_issuer = "http://localhost:8080/realms/inbox-page".parse().unwrap();

        let oauth_client = DiscoveredClient::discover(
            openid_client_id.clone(),
            openid_client_secret.clone(),
            openid_redirect_uri.clone(),
            openid_issuer
        ).await.unwrap();

        Ok(Self {
            db_pool,
            openid_url,
            openid_redirect_uri,
            openid_client_id,
            openid_client_secret,
            oauth_client,
        })
    }
}
