# Transit Store

## Development

This is a [Jekyll][jekyll] static site. We include a [Docker Compose][docker-compose] file to help with local testing
and development.

To run the site locally with `jekyll`:

```bash
bundle install
jekyll serve --force_polling --livereload
```

To run the site locally with `docker-compose`:

```bash
docker-compose up [-d] site
```

The site is running at http://localhost:4000. Auto rebuild/reload is also be active and watching the site files for changes.

[docker-compose]: https://docs.docker.com/compose/
[jekyll]: https://jekyllrb.com
