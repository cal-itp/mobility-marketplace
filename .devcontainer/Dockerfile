FROM python:3.12

ENV USER=mobimart
ENV HOME=/home/$USER

ENV WORK_DIR=$HOME/site \
    MISE_DIR=$HOME/mise

RUN useradd --create-home --shell /bin/bash $USER && \
    mkdir $WORK_DIR && \
    chown -R $USER $HOME

WORKDIR $WORK_DIR

# Install mise (to manage Node.js) https://mise.jdx.dev/mise-cookbook/docker.html#docker-image-with-mise
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
ENV MISE_DATA_DIR=$MISE_DIR
ENV MISE_CONFIG_DIR=$MISE_DIR
ENV MISE_CACHE_DIR="$MISE_DIR/cache"
ENV MISE_INSTALL_PATH="/usr/local/bin/mise"
ENV MISE_TRUSTED_CONFIG_PATHS=$WORK_DIR
ENV PATH="$MISE_DIR/shims:$PATH"

RUN curl https://mise.run | sh

# Install Python dependencies
COPY .devcontainer/requirements.txt .devcontainer/requirements.txt
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r .devcontainer/requirements.txt

USER $USER

RUN git config --global --add safe.directory $HOME

# Install Node.js and npm dependencies
COPY mise.toml .node-version package.json package-lock.json ./
RUN mise exec -- npm install -g npm@latest && npm clean-install
