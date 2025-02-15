# build
yarn install --immutable && yarn tsc && yarn build:backend && docker image build . -f packages/backend/Dockerfile --tag goafabric/backstage
docker run --rm -it -p 7007:7007 goafabric/backstage

# tech radar
https://github.com/backstage/community-plugins/blob/main/workspaces/tech-radar/plugins/tech-radar/README.md
yarn --cwd packages/app add @backstage-community/plugin-tech-radar
yarn --cwd packages/backend add @backstage-community/plugin-tech-radar-backend