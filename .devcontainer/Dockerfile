FROM python:3.12

ENV USER=mobimart
ENV HOME=/home/$USER

RUN useradd --create-home --shell /bin/bash $USER && \
    chown -R $USER $HOME

WORKDIR $HOME/site

# Install mise (to manage Node.js) https://mise.jdx.dev/mise-cookbook/docker.html#docker-image-with-mise
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
ENV MISE_DATA_DIR="$HOME/mise"
ENV MISE_CONFIG_DIR="$HOME/mise"
ENV MISE_CACHE_DIR="$HOME/mise/cache"
ENV MISE_INSTALL_PATH="/usr/local/bin/mise"
ENV PATH="$HOME/mise/shims:$PATH"

RUN curl https://mise.run | sh

RUN apt-get update

# Install Python dependencies
COPY .devcontainer/requirements.txt .devcontainer/requirements.txt
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r .devcontainer/requirements.txt

USER $USER

RUN git config --global --add safe.directory $HOME
