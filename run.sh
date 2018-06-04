#!/bin/bash
PATH=$PATH:$(npm bin)
set -x
# Production build
ng build --prod
# Serve
cd dist/angularShop
http-server
