# Backstage Demo App
Mono Repo like approach where configuration sits under /catalog
Chaged Docker Image to work with Guest Login

# update
yarn backstage-cli versions:bump

# create
time npx @backstage/create-app@latest --next


# Docker image
docker run --rm -it -p 7007:7007 goafabric/backstage:1.0.4-SNAPSHOT

# Local run
yarn install
yarn start

# docker file
- for guest login: ENV NODE_ENV=development
- also needs catalog folder to be added
- also needs mktechdocs-core added

# important files in general

- packages/app/src/App.tsx
- packages/app/src/nav/Sidebar.tsx
- packages/backend/src/index.ts

# config + catalog
/catalog
app-config.yaml
app-config-catalogs.yaml
app-config-production.yaml


# plugins

# techdocs + apidocs
https://github.com/backstage/backstage/blob/HEAD/docs/features/techdocs/getting-started.md

yarn --cwd packages/app add @backstage/plugin-techdocs
yarn --cwd packages/app add backstage-plugin-techdocs-addon-mermaid

yarn --cwd packages/app add @backstage/plugin-api-docs

# catalog graph
yarn --cwd packages/app add @backstage/plugin-catalog-graph

# adr
https://www.npmjs.com/package/@backstage-community/plugin-adr

yarn --cwd packages/app add @backstage-community/plugin-adr
yarn --cwd packages/backend add @backstage-community/plugin-adr-backend
yarn --cwd packages/backend add @backstage-community/search-backend-module-adr

grep -Fq "backend.add(import('@backstage-community/plugin-adr-backend'));" ./packages/backend/src/index.ts || sed -i '' '/backend\.start()/i\
backend.add(import('"'"'@backstage-community/plugin-adr-backend'"'"'));' ./packages/backend/src/index.ts

grep -Fq "backend.add(import('@backstage-community/search-backend-module-adr'));" ./packages/backend/src/index.ts || sed -i '' '/backend\.start()/i\
backend.add(import('"'"'@backstage-community/search-backend-module-adr'"'"'));' ./packages/backend/src/index.ts

# tech radar
https://www.npmjs.com/package/@backstage-community/plugin-tech-radar
https://github.com/backstage/community-plugins/blob/HEAD/workspaces/tech-radar/plugins/tech-radar-backend/README.md

yarn --cwd packages/app add @backstage-community/plugin-tech-radar
yarn --cwd packages/backend add @backstage-community/plugin-tech-radar-backend

grep -Fq "backend.add(import('@backstage-community/plugin-tech-radar-backend'));" ./packages/backend/src/index.ts || sed -i '' '/backend\.start()/i\
backend.add(import('"'"'@backstage-community/plugin-tech-radar-backend'"'"'));' ./packages/backend/src/index.ts

        
######
## gitlab + postgres
yarn --cwd packages/backend add pg

yarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-gitlab

yarn --cwd packages/app add @immobiliarelabs/backstage-plugin-gitlab
yarn --cwd packages/backend add @immobiliarelabs/backstage-plugin-gitlab-backend

grep -Fq "backend.add(import('@immobiliarelabs/backstage-plugin-gitlab-backend'));" ./packages/backend/src/index.ts || sed -i '' '/backend\.start()/i\
backend.add(import('"'"'@immobiliarelabs/backstage-plugin-gitlab-backend'"'"'));' ./packages/backend/src/index.ts


# kiali
https://github.com/backstage/community-plugins/tree/main/workspaces/kiali/plugins/kiali

yarn workspace app add @backstage-community/plugin-kiali
yarn workspace backend add @backstage-community/plugin-kiali-backend1