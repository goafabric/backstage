#!/bin/bash

# create
time npx @backstage/create-app@latest
yarn install

# cp app-config.yaml + catalog