# Mobility Marketplace

[`camobilitymarketplace.org`](https://camobilitymarketplace.org/)

A one-stop resource for modern, equitable and accessible public transit products and services.

Deployed via [Netlify][netlify] [![Netlify Status](https://api.netlify.com/api/v1/badges/0fcfad48-7c0e-43f4-bb85-f7447f7f5fa6/deploy-status)](https://app.netlify.com/sites/cal-itp-transit-stop/deploys)

## Development

### Cloning the repository

You can run the usual `git clone` command to check out this project, but notice that this repo contains [Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). To ensure you have all the files in those submodules, you can pass `--recuse-submodules` when cloning:

```
git clone --recurse-submodules https://github.com/cal-itp/mobility-marketplace.git
```

or if you've already cloned the project, you can run:

```
git submodule update --init
```

### Running a local instance

This is a [Jekyll][jekyll] static site. We include a [Devcontainer][devcontainer] configuration to help with local testing
and development.

1. Open the repository directory in VS Code
1. `Ctrl/Cmd+Shift+P` to bring up the Command Palette
1. Enter `Remote-Containers` to filter the command list
1. Enter or select `Rebuild and Reopen in Container` to start from scratch
1. Enter or select `Reopen in Container` to reopen the last devcontainer used

Once inside the devcontainer, you have the manually start the site:

1. `Ctrl/Cmd+Shift+P` to bring up the Command Palette
1. Enter `Tasks: Run Task`
1. Enter or select `Jekyll: Build Dev`
1. Open the app on `http://127.0.0.1:4000/`\*

Auto rebuild/reload will be active and will watch the site files for changes.

\* Try using <kbd>cmd</kbd> and clicking on the server address from the Terminal

## License

Content (including graphics, images, video, documents, and text) in this repository is licensed under [CC-BY 4.0][content-license].

The source code in this repository used to format and display the content is licensed under [GPL-3.0][code-license].

[devcontainer]: https://code.visualstudio.com/docs/remote/remote-overview
[jekyll]: https://jekyllrb.com
[code-license]: ./LICENSE
[content-license]: ./content/LICENSE
[netlify]: https://www.netlify.com/
[netlify-build]: https://github.com/netlify/build-image
