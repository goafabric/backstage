IMAGE_NAME=goafabric/backstage:1.0.0-SNAPSHOT

yarn install --immutable && yarn tsc && yarn build:backend

#docker buildx create --name mybuilder --use && docker buildx build --platform linux/amd64,linux/arm64 -t $IMAGE_NAME -f packages/backend/Dockerfile --push . ; docker buildx stop mybuilder && docker buildx rm mybuilder

#docker buildx create --name mybuilder --use; docker buildx build --platform linux/amd64,linux/arm64 -t $IMAGE_NAME --cache-from=type=local,src=./tmp/buildx-cache --cache-to=type=local,dest=./tmp/buildx-cache -f packages/backend/Dockerfile --push . ; docker buildx stop mybuilder && docker buildx rm mybuilder

docker image build . -f packages/backend/Dockerfile --tag ${IMAGE_NAME} && docker push ${IMAGE_NAME}

docker run --pull=always --rm -it -p 3000:7007 -e AUTH_GITHUB_CLIENT_ID=$AUTH_GITHUB_CLIENT_ID -e AUTH_GITHUB_CLIENT_SECRET=$AUTH_GITHUB_CLIENT_SECRET goafabric/backstage:1.0.0-SNAPSHOT
