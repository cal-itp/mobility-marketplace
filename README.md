# Mobility Marketplace

[`camobilitymarketplace.org`](https://camobilitymarketplace.org/)

A one-stop resource for modern, equitable and accessible public transit products and services.

Deployed via [Netlify][netlify] [![Netlify Status](https://api.netlify.com/api/v1/badges/0fcfad48-7c0e-43f4-bb85-f7447f7f5fa6/deploy-status)](https://app.netlify.com/projects/cal-itp-mobility-marketplace/deploys)

## Development

### Running a local instance

This is a [Jekyll][jekyll] static site. We include a [Devcontainer][devcontainer] configuration to help with local testing
and development.

1. Open the repository directory in VS Code
1. `Ctrl/Cmd+Shift+P` to bring up the Command Palette
1. Enter `Remote-Containers` to filter the command list
1. Enter or select `Rebuild and Reopen in Container` to start from scratch
1. Enter or select `Reopen in Container` to reopen the last devcontainer used

Once inside the devcontainer, you can manually start the site like this:

1. `Ctrl/Cmd+Shift+P` to bring up the Command Palette
1. Enter `Tasks: Run Task`
1. Enter or select `Jekyll: Build Dev`
1. Open the app on `http://127.0.0.1:4000/`\*

Auto rebuild/reload will be active and will watch the site files for changes.

\* Try using <kbd>cmd</kbd> and clicking on the server address from the Terminal

## Documents

This site uses Google Cloud to manage static files, like the PDFs on the How To pages.

Requirements: User must be authorized on Google Cloud to access the resources-calitp-org bucket.

1. Go to https://cloud.google.com/
1. Click `Console`
1. Click `Cloud Storage`
1. Click `resources.calitp.org`
1. Click mobility-marketplace
1. Click button for action needed: Upload Files, Delete or Edit on a particular file

## Analytics

Site analytics is tracked by Google Analytics, version 4. Ask an administrator to grant you access.

## License

Content (including graphics, images, video, documents, and text) in this repository is licensed under [CC-BY 4.0][content-license].

The source code in this repository used to format and display the content is licensed under [GPL-3.0][code-license].

[devcontainer]: https://code.visualstudio.com/docs/remote/remote-overview
[jekyll]: https://jekyllrb.com
[code-license]: ./LICENSE
[content-license]: ./content/LICENSE
[netlify]: https://www.netlify.com/
[netlify-build]: https://github.com/netlify/build-image
