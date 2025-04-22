#!/bin/bash

# create
#time npx @backstage/create-app@latest

# cp app-config.yaml + catalog

# adr backend
yarn --cwd packages/backend add @backstage-community/plugin-adr-backend

sed -i '' "/backend\.start();/i\\
backend.add(import('@backstage-community/plugin-adr-backend'));
" packages/backend/src/index.ts

# adr frontend
yarn --cwd packages/app add @backstage-community/plugin-adr

sed -i '' $'/const techdocsContent/i\\
import { EntityAdrContent, isAdrAvailable } from '\''@backstage-community/plugin-adr'\'';
' packages/app/src/components/catalog/EntityPage.tsx

perl -i -pe 's{(</EntityLayout>)}{<EntityLayout.Route if={isAdrAvailable} path="/adrs" title="ADRs">\n  <EntityAdrContent />\n</EntityLayout.Route>\n$1}g' packages/app/src/components/catalog/EntityPage.tsx

