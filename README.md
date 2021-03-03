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
