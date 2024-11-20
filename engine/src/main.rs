use dotenvy::dotenv;
use poem::{
    get, handler, listener::TcpListener, middleware::Cors, web::Path, EndpointExt,
    Route, Server,
};

pub mod routes;
pub mod database;

use crate::database::init_db;

#[handler]
fn hello(Path(name): Path<String>) -> String {
    format!("hello: {}", name)
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Load environment variables
    dotenv().ok();
    
    let database_url = std::env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");

    // Initialize database and run migrations
    let db_pool = init_db(&database_url).await?;

    // allow all cors
    let app = Route::new()
        .at("/", get(hello))
        .at("/auth/challenge", get(routes::auth::challenge::get))
        .with(Cors::new());

    Ok(Server::new(TcpListener::bind("0.0.0.0:3000"))
        .run(app)
        .await?)
}
