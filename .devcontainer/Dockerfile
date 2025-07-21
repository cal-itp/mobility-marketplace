FROM python:3.10

SHELL ["/bin/bash", "-o", "pipefail", "-c"]
WORKDIR /usr/src/mobimart

RUN apt-get update

# A better way to add things to PATH (https://github.com/nvm-sh/nvm#installing-in-docker)
ENV BASH_ENV /root/.bash_env
RUN touch "${BASH_ENV}"
RUN echo '. "${BASH_ENV}"' >> ~/.bashrc

# Install rvm (https://rvm.io/rvm/install#install-gpg-keys)
RUN gpg --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
RUN curl -sSL https://get.rvm.io | bash -s stable
RUN echo 'source /usr/local/rvm/scripts/rvm' >> "${BASH_ENV}"

# Install Ruby, Bundler, and dependencies
COPY .ruby-version .ruby-version
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN rvm install $(cat .ruby-version | tr -d "\n") && gem install bundler && bundle install

# Install Python dependencies
COPY .devcontainer/requirements.txt .devcontainer/requirements.txt
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r .devcontainer/requirements.txt

# Install npm for Ditto support
COPY .nvmrc .nvmrc
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | PROFILE="${BASH_ENV}" bash
RUN nvm install
