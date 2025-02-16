IMAGE_NAME=goafabric/backstage:1.0.0-SNAPSHOT

yarn install --immutable && yarn tsc && yarn build:backend

docker buildx create --name mybuilder --use && docker buildx build --platform linux/amd64,linux/arm64 -t $IMAGE_NAME -f .packages/backend/Dockerfile --push . ; docker buildx stop mybuilder && docker buildx rm mybuilder

#docker image build . -f packages/backend/Dockerfile --tag ${IMAGE_NAME} && docker push ${IMAGE_NAME}

docker run --rm -it -p 7007:7007 backstage:1.0.0-SNAPSHOT
