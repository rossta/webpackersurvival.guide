# Webpacker Survival Guide

Webpacker Survival Guide aims to be the best free resource for learning how to use Webpacker (and webpack) with Rails.

## Local Development

Use the node.js version specified in .nvmrc. The following commands assume yarn as the package manager.

To install dependencies:

```console
yarn install
```

This command will install dependencies.

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## License

[![CC BY 4.0][cc-by-shield]][cc-by]

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg
