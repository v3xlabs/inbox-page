use std::sync::Arc;

use openid::{Client, Discovered, DiscoveredClient, StandardClaims, Userinfo};
use poem::{handler, web::{Data, Json}, Result};
use serde::{Deserialize, Serialize};
use tracing::info;

use crate::state::AppState;

type OpenIDClient = Client<Discovered, StandardClaims>;

#[derive(Debug, Deserialize)]
pub struct AuthTokenRequest {
    pub code: String,
    pub state: Option<String>,
    pub session_state: Option<String>,
    pub iss: Option<String>,
}

#[derive(Debug, Serialize)]
pub struct OAuthResponse {
    pub access_token: String,
    pub refresh_token: Option<String>,
    pub userinfo: Userinfo,
}

#[handler]
pub async fn get(Data(app_state): Data<&Arc<AppState>>, Json(request): Json<AuthTokenRequest>) -> Result<Json<OAuthResponse>> {
    let app_state = app_state.clone();

    // let openid_discovery_url = app_state.keycloak_openid_url.clone();

    let mut token = app_state.oauth_client.authenticate(&request.code, None, None).await.unwrap();

    if let Some(id_token) = token.id_token.as_mut() {
        app_state.oauth_client.decode_token(id_token).unwrap();
        app_state.oauth_client.validate_token(id_token, None, None).unwrap();
        info!("token: {:?}", id_token);
    } else {
        // TODO: handle error
    }

    let userinfo = app_state.oauth_client.request_userinfo(&token).await.unwrap();

    info!("userinfo: {:?}", userinfo);

    Ok(
        Json(
        OAuthResponse {
            access_token: token.bearer.access_token,
            refresh_token: token.bearer.refresh_token,
            userinfo,
        }
    ))
}
