# install
https://backstage.io/docs/releases/v1.42.0/?utm_campaign=10548882-backstage-community&utm_content=345183333&utm_medium=social&utm_source=linkedin&hss_channel=lcp-92965510

npx @backstage/create-app@latest --next

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
               
####

# tech radar
https://www.npmjs.com/package/@backstage-community/plugin-tech-radar
https://github.com/backstage/community-plugins/blob/HEAD/workspaces/tech-radar/plugins/tech-radar-backend/README.md

yarn --cwd packages/app add @backstage-community/plugin-tech-radar
yarn --cwd packages/backend add @backstage-community/plugin-tech-radar-backend

grep -Fq "backend.add(import('@backstage-community/plugin-tech-radar-backend'));" ./packages/backend/src/index.ts || sed -i '' '/backend\.start()/i\
backend.add(import('"'"'@backstage-community/plugin-tech-radar-backend'"'"'));' ./packages/backend/src/index.ts


# soundcheck
https://backstage.spotify.com/docs/plugins/soundcheck/setup-and-installation
