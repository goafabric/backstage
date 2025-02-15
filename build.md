yarn install --immutable && yarn tsc && yarn build:backend && docker image build . -f packages/backend/Dockerfile --tag goafabric/backstage

docker run --rm -it -p 7007:7007 goafabric/backstage