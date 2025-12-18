FROM python:3.14

WORKDIR /usr/src/mobimart

# Install our one Python dependency
RUN pip install pre-commit

# Install Mise for the same tool management as Netlify
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
ENV MISE_DATA_DIR="/mise"
ENV MISE_CONFIG_DIR="/mise"
ENV MISE_CACHE_DIR="/mise/cache"
ENV MISE_INSTALL_PATH="/usr/local/bin/mise"
ENV PATH="/mise/shims:$PATH"
COPY .mise.toml /etc/mise/config.toml
RUN curl https://mise.run | sh

# Setup Node and install dependencies
COPY .node-version ./
COPY package*.json ./
# Mise will install the version of Node specified in .node-version
# before it tries to run `npm ci`
RUN mise exec -- npm ci
