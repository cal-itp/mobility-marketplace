FROM python:3.10

WORKDIR /usr/src/mobimart

RUN apt-get update

# Install rvm (https://rvm.io/rvm/install#install-gpg-keys)
RUN gpg --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
RUN curl -sSL https://get.rvm.io | bash -s stable
RUN echo 'source /usr/local/rvm/scripts/rvm' >> /etc/bash.bashrc

# Install Ruby, Bundler, and dependencies
COPY .ruby-version .ruby-version
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN /bin/bash -l -c 'rvm install $(cat .ruby-version | tr -d "\n") && gem install bundler && bundle install'

# Install Python dependencies
COPY .devcontainer/requirements.txt .devcontainer/requirements.txt
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r .devcontainer/requirements.txt
