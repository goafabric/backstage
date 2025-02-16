# Backstage Demo App
Mono Repo like approach where configuration sits under /catalog
Chaged Docker Image to work with Guest Login

# Docker image
docker run --rm -it -p 7007:7007 goafabric/backstage:1.0.0-SNAPSHOT

# Local run
yarn install
yarn dev

# tech radar
https://github.com/backstage/community-plugins/blob/main/workspaces/tech-radar/plugins/tech-radar/README.md
yarn --cwd packages/app add @backstage-community/plugin-tech-radar
yarn --cwd packages/backend add @backstage-community/plugin-tech-radar-backend

# docker file
for guest login: ENV NODE_ENV=development
also needs catalog folder to be added