use std::sync::Arc;

use dotenvy::dotenv;
use poem::{
    get, handler, listener::TcpListener, middleware::Cors, web::Path, EndpointExt,
    Route, Server,
};
use state::AppState;

pub mod routes;
pub mod database;
pub mod state;

#[handler]
fn hello(Path(name): Path<String>) -> String {
    format!("hello: {}", name)
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Load environment variables
    dotenv().ok();

    let app_state = Arc::new(AppState::new().await?);

    // allow all cors
    let app = Route::new()
        .at("/", get(hello))
        .at("/auth/challenge", get(routes::auth::challenge::get))
        .at("/auth/oauth", get(routes::auth::oauth::get))
        .with(Cors::new())
        .data(app_state);

    Ok(Server::new(TcpListener::bind("0.0.0.0:3000"))
        .run(app)
        .await?)
}
