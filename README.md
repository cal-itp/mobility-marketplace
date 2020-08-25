# Transit Store

[`cal-itp-transit-store.netlify.app`](https://cal-itp-transit-store.netlify.app/)

Deployed via [Netlify][netlify] [![Netlify (Status)](https://api.netlify.com/api/v1/badges/339b40a7-0bbb-4059-bea7-5842eb3a987d/deploy-status)](https://app.netlify.com/sites/cal-itp-transit-store/deploys)

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

## Building for Production

While [Netlify][netlify] is responsible for the production site builds, you may want to replicate this process locally for development and testing.

We include a `docker-compose` command that runs the official [Netlify build image][netlify-build] against the local repository contents, with our production build script(s).

```bash
docker-compose run netlify
```

## License

Content (including graphics, images, video, documents, and text) in this repository is licensed under [CC-BY 4.0][content-license].

The source code in this repository used to format and display the content is licensed under [GPL-3.0][code-license].

[docker-compose]: https://docs.docker.com/compose/
[jekyll]: https://jekyllrb.com
[code-license]: ./LICENSE
[content-license]: ./content/LICENSE
[netlify]: https://www.netlify.com/
[netlify-build]: https://github.com/netlify/build-image