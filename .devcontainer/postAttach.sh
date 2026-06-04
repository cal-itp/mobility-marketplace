#!/usr/bin/env bash
set -eux

# initialize hook environments
pre-commit install --install-hooks --overwrite

# manage commit-msg hooks
pre-commit install --hook-type commit-msg

# triggers a Node.js install (from .node-version file) and updates the npm cli
mise exec -- npm install -g npm@latest
# https://docs.npmjs.com/cli/commands/npm-ci
mise exec -- npm clean-install
