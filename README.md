# Transit Store

[`cal-itp-transit-store.netlify.app`](https://cal-itp-transit-store.netlify.app/)

Deployed via: [![Netlify (Status)](https://api.netlify.com/api/v1/badges/339b40a7-0bbb-4059-bea7-5842eb3a987d/deploy-status)](https://app.netlify.com/sites/cal-itp-transit-store/deploys)

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
