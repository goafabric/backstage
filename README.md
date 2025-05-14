# Backstage Demo App
Mono Repo like approach where configuration sits under /catalog
Chaged Docker Image to work with Guest Login

# Docker image
docker run --rm -it -p 7007:7007 goafabric/backstage:1.0.3-SNAPSHOT

# Local run
yarn install
yarn start

# docker file
for guest login: ENV NODE_ENV=development
also needs catalog folder to be added

# config + catalog
/catalog
app-config.yaml
app-config-production.yaml

# my tech radar
/packages/app/src/components/Root/Root.tsx
/packages/app/src/App.tsx
/packages/app/src/components/custom/

/packages/app/public/custom

# github actions
https://github.com/backstage/community-plugins/tree/main/workspaces/github-actions/plugins/github-actions

yarn --cwd packages/app add @backstage/plugin-github-actions
yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-github-provider

/packages/src/components/catalog/EntityPage.tsx
/packages/backend/src/index.ts
    backend.add(import('@backstage/plugin-auth-backend-module-github-provider'));

# gitlab
https://github.com/immobiliare/backstage-plugin-gitlab

# scaffolder plugins
https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/scaffolder-actions/scaffolder-backend-module-utils/README.md
yarn --cwd packages/backend @roadiehq/scaffolder-backend-module-utils
    
# adr
https://github.com/backstage/community-plugins/blob/HEAD/workspaces/adr/plugins/adr-backend/README.md
https://www.npmjs.com/package/@backstage-community/plugin-adr
