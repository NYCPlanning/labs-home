#!/bin/bash

# build static site
gatsby build

# goto build directory
cd public

# add .static file so dokku will use nginx buildpack
touch .static

# create git repo in the build directory
git init
git add .
git commit -m "deploy"

# add git remote
git remote add dokku dokku@planninglabs.nyc:gatsby

# push
git push dokku master
