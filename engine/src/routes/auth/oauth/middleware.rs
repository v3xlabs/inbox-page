use std::sync::Arc;

use openid::{Bearer, Jws, Token, Userinfo};
use poem::{web::Data, Body, FromRequest, Request, RequestBody};
use thiserror::Error;
use tracing::info;

use crate::state::AppState;

pub struct UserData {
    pub user: Option<Userinfo>,
}

#[derive(Debug, Error)]
pub enum UserDataError {
    #[error("user not found")]
    UserNotFound,
}

impl<'a> FromRequest<'a> for UserData {
    async fn from_request(req: &'a Request, body: &mut RequestBody) -> Result<Self, poem::Error> {
        let app_state = Data::<&Arc<AppState>>::from_request(req, body).await.unwrap();

        // extract auth key from the request
        let auth_key = req.headers().get("Authorization").map(|h| h.to_str().unwrap()).unwrap_or("");

        info!("auth_key: {:?}", auth_key);

        let token = auth_key.split(" ").nth(1).unwrap();
        let mut token = Jws::new_encoded(token);

        app_state.oauth_client.decode_token(&mut token).unwrap();
        app_state.oauth_client.validate_token(&token, None, None).unwrap();

        // let userinfo = app_state.oauth_client.request_userinfo(&token.).await.unwrap();
        let claims = token.payload().unwrap();

        info!("userinfo: {:?}", claims);

        Ok(UserData{
            user: Some(claims.userinfo.clone()),
        })
    }
}
