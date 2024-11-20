use std::sync::Arc;

use openid::{Client, Discovered, DiscoveredClient, Options, StandardClaims};
use poem::{handler, web::{Data, Json}, Result};
use serde::Serialize;

use crate::state::AppState;

type OpenIDClient = Client<Discovered, StandardClaims>;

#[derive(Debug, Serialize)]
pub struct OAuthResponse {
    /// The URL to redirect the user to for OAuth authentication.
    /// Example: `http://localhost:8080/realms/inbox-page/protocol/openid-connect/auth?client_id=inbox-page&redirect_uri=http://localhost:5173&response_type=code&scope=openid`
    pub url: String,
}

#[handler]
pub async fn get(Data(app_state): Data<&Arc<AppState>>) -> Result<Json<OAuthResponse>> {
    let app_state = app_state.clone();

    let openid_discovery_url = app_state.keycloak_openid_url.clone();


    let openid_client_id = app_state.keycloak_client_id.clone();
    let openid_client_secret = app_state.keycloak_client_secret.clone();
    let openid_redirect_uri = app_state.keycloak_redirect_uri.clone();
    let openid_issuer = "http://localhost:8080/realms/inbox-page".parse().unwrap();

    let discovered_client = DiscoveredClient::discover(
        openid_client_id,
        openid_client_secret,
        openid_redirect_uri,
        openid_issuer
    ).await.unwrap();

    Ok(
        Json(
        OAuthResponse {
            url: discovered_client.auth_url(&Options {
                ..Default::default()
            })
            .to_string(),
        }
    ))
}
