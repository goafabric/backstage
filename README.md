# Backstage Demo App
Mono Repo like approach where configuration sits under /catalog
Chaged Docker Image to work with Guest Login

# Docker image
docker run --rm -it -p 7007:7007 goafabric/backstage:1.0.0-SNAPSHOT

# Local run
yarn install
yarn dev

# docker file
for guest login: ENV NODE_ENV=development
also needs catalog folder to be added

# config
app-config.yaml
app-config-production.yaml

# github actions
https://github.com/backstage/community-plugins/tree/main/workspaces/github-actions/plugins/github-actions
/packages/src/components/catalog/EntityPage.tsx

yarn --cwd packages/app add @backstage/plugin-github-actions
yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-github-provider

/packages/backend/src/index.ts
    backend.add(import('@backstage/plugin-auth-backend-module-github-provider'));

# my tech radar
/packages/app/src/components/Root/Root.tsx
/packages/app/src/App.tsx
/packages/app/src/components/custom/

/packages/app/public/custom