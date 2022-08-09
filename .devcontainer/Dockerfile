FROM jekyll/jekyll:4

RUN apk update
RUN apk add --no-cache python3 py3-pip python3-dev openssh

# Create the virtual environment
RUN python3 -m venv /venv
ENV PATH=/venv/bin:$PATH

WORKDIR /srv/jekyll

RUN python3 -m pip install --upgrade pip

COPY .devcontainer/requirements.txt .devcontainer/requirements.txt
RUN pip3 install --no-cache-dir -r .devcontainer/requirements.txt

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install
