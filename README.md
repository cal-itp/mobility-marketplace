# Mobility Marketplace

[`camobilitymarketplace.org`](https://camobilitymarketplace.org/)

A one-stop resource for modern, equitable and accessible public transit products and services.

Deployed via [Netlify][netlify] [![Netlify Status](https://api.netlify.com/api/v1/badges/0fcfad48-7c0e-43f4-bb85-f7447f7f5fa6/deploy-status)](https://app.netlify.com/projects/cal-itp-mobility-marketplace/deploys)

## Development

### Running a local instance

This is a [11ty][11ty] static site. We include a [Devcontainer][devcontainer] configuration to help with local testing
and development.

1. Open the repository directory in VS Code
1. `Ctrl/Cmd+Shift+P` to bring up the Command Palette
1. Enter `Remote-Containers` to filter the command list
1. Enter or select `Rebuild and Reopen in Container` to start from scratch
1. Enter or select `Reopen in Container` to reopen the last devcontainer used

Once inside the devcontainer, you can manually start the site like this:

1. `Ctrl/Cmd+Shift+P` to bring up the Command Palette
1. Enter `Tasks: Run Task`
1. Enter or select `11ty: Serve`
1. Open the app on `http://127.0.0.1:8080/`\*

Auto rebuild/reload will be active and will watch the site files for changes.

\* Try using <kbd>cmd</kbd> and clicking on the server address from the Terminal

## Documents

The downloadable resources on this site are a mix of external links and files checked directly into version control in [src/uploads/resources](./src/uploads/resources/)

## Analytics

Site analytics is tracked by Google Analytics, version 4. Ask an administrator to grant you access.

## License

Content (including graphics, images, video, documents, and text) in this repository is licensed under [CC-BY 4.0][content-license].

The source code in this repository used to format and display the content is licensed under [GPL-3.0][code-license].

[devcontainer]: https://code.visualstudio.com/docs/remote/remote-overview
[11ty]: https://11ty.dev
[code-license]: ./LICENSE
[content-license]: ./content/LICENSE
[netlify]: https://www.netlify.com/
[netlify-build]: https://github.com/netlify/build-image
