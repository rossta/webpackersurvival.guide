# Config

For readers who need to go even further, there's no better place to go next than webpack's [Getting Started guide](https://webpack.js.org/guides/getting-started/).

## Inspect the config

To print it out on the command line, here's a handy one-line script:

```sh
$ RAILS_ENV=development node -e 'console.dir(require("./config/webpack/development"), { depth: null })'
# displays entire webpack config object
```

[console.dir](https://nodejs.org/api/console.html#console_console_dir_obj_options) is a nice alternative to `console.log` for inspecting JavaScript objects.

## Examples

Here's the rub: Webpacker, in true Rails fashion, aims to provide convention over configuration, however, the design of webpack skews heavily in the other direction: it is extremely flexible and malleable through its support for plugins and a large number of configurable options. Webpack is built to support a broad range of use cases to meet the needs of a diverse frontend landscape. Webpacker's opinionated approach may leave out something you need.

This means there may come a time when you need to roll up your sleeves and peel back the abstraction layer and modify the base Webpacker `environment` object. At this point, it may help to read up on [the Webpacker docs for modifying the webpack configuration](https://github.com/rails/webpacker/blob/a84a4bb6b385ae17dd775a6034a0b159b88c6ea9/docs/webpack.md#configuration). Below are just a few examples.

### Providing jQuery as an import to legacy plugins and exposing to global scope

Here's an example of how to "provide" a jQuery import to a legacy package that doesn't understand modules and to "expose" the `$` variable for the global scope (allowing you to use `$(...)` expressions in raw `<script>` tags).

```sh
$ yarn add expose-loader
```

```javascript
// config/webpack/environment.js
const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// Adds `var jQuery = require('jquery') to legacy jQuery plugins
environment.plugins.append(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
  }),
)

// Adds window.$ = require('jquery')
environment.loaders.append('jquery', {
  test: require.resolve('jquery'),
  use: [
    {
      loader: 'expose-loader',
      options: '$',
    },
  ],
})

module.exports = environment
```

[This StackOverflow post](https://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack) provides more general context on making legacy jQuery play nice with webpack.

### Loading dotenv ENV vars in webpack

A nice feature of webpack and the default webpack configuration is that it will make ENV vars available to the build process. For example, using `process.ENV.MY_API_KEY` will be compiled to `"my-api-key-value"` in your webpack build. To emulate the behavior of the popular `dotenv-rails` project, which can load ENV vars defined in `.env*` files, you could add configuration as follows:

```sh
yarn add dotenv
```

```javascript
// config/webpack/environment.js

const { environment } = require('@rails/webpacker')
const webpack = require('webpack')
const dotenv = require('dotenv')

const dotenvFiles = [
  `.env.${process.env.NODE_ENV}.local`,
  '.env.local',
  `.env.${process.env.NODE_ENV}`,
  '.env',
]
dotenvFiles.forEach((dotenvFile) => {
  dotenv.config({ path: dotenvFile, silent: true })
})

module.exports = environment
```

[Original source in the Webpacker docs](https://github.com/rails/webpacker/blob/a84a4bb6b385ae17dd775a6034a0b159b88c6ea9/docs/env.md#environment-variables).

### Enabling webpack optimization

The `splitChunks` API instructs webpack to share dependencies across bundles. Using this optimization step must be combined with different view helpers; see the[Webpacker docs](https://github.com/rails/webpacker/blob/a84a4bb6b385ae17dd775a6034a0b159b88c6ea9/docs/webpack.md#add-splitchunks-webpack-v4) for more info.

```javascript
// config/webpack/environment.js

// Enable the default config
environment.splitChunks()
```

> Tip: Use the `splitChunks` API for solving the "page-specific JavaScript" problem with Webpacker.

See the [webpack splitChunks docs](https://webpack.js.org/plugins/split-chunks-plugin/) for more info.

#### Using module aliases

The Webpacker environment API also supports a `config.merge` function to override raw webpack config options. This example would allow you to import images from the `app/assets` directory using `import 'images/path/to/image.jpg'`.

```javascript
// config/webpack/environment.js
const { resolve } = require('path')

// Enable the default config
environment.config.merge({
  resolve: {
    alias: {
      images: resolve('app/assets/images'),
    },
  },
})
```

Learn more in the [webpack resolve docs](https://webpack.js.org/configuration/resolve/).

### Overriding the default options for compiling CSS modules

This change involves modifying an existing loader, which can be accessed using `environment.loaders.get(key)` and replacing its options property.

```javascript
// config/webpack/environment.js
const { environment } = require('@rails/webpacker')

const myCssLoaderOptions = {
  modules: {
    localIdentName: '[name]__[local]___[hash:base64:10]',
  },
  sourceMap: true,
}

const CSSLoader = environment.loaders
  .get('moduleSass')
  .use.find((el) => el.loader === 'css-loader')

CSSLoader.options = { ...CSSLoader.options, ...myCssLoaderOptions }

module.exports = environment
```

[Original source in the Webpacker docs](https://github.com/rails/webpacker/blob/a84a4bb6b385ae17dd775a6034a0b159b88c6ea9/docs/webpack.md#overriding-loader-options-in-webpack-3-for-css-modules-etc).
