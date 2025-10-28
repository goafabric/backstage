# div
https://backstage.io/docs/auth/github/provider/
yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-github-provider

# github callback urls for backstage with native OIDC
http://localhost:3000
http://localhost:7007/api/auth/github/handler/frame

# github callback urls for backstage IN DOCKER with OauthProxy , needs to match CALLBACK in OauthProxy in docker compose
https://localhost:443/
https://localhost/oauth2/callback