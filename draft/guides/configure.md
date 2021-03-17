# Configuration

Configuration for Webpacker lives in several files in the Rails `config/` directory.

- `config/webpacker.yml`
- `config/webpack/{base,development,production,test}.js`

The `config/webpacker.yml` allows developers to control some aspects of webpack configuration without having to touch webpack JavaScript config. The `config/webpack/*.js` files are for lower-level customization of webpack behavior where developers can directly edit the default webpack config provided by `@rails/webpacker`.

## Installation

The Webpacker config files are created installed either as part of generating a new Rails project with Webpacker enabled or by running the Webpacker installation task provided by the Webpacker gem.

```sh
$ rails new webpacker_project # OR
$ rails webpacker:install
```

The installer also generates environment-specific JavaScript files in `config/webpack/`.

```sh
config
│
├── webpack
│   ├── development.js
│   ├── environment.js
│   ├── production.js
│   └── test.js
└── webpacker.yml
```

## webpacker.yml

Answers to the following questions are specified in `config/webpacker.yml`:

- _Where are the source files located?_
- _What file types should be bundled?_
- _What's the output destination for the bundled files?_
- _Should CSS be embedded via JS or output as a separate file?_
- _What port should the webpack-dev-server listen on in development?_

This file is read both Ruby code supplied by the Webpacker gem in the Rails server process and the JavaScript process that generates the webpack configuration via the `@rails/webpacker` NPM package. It supports a number of YAML entries which I'll describe in more detail in the [reference guide](#reference-guide).

When upgrading the Webpacker gem, it's prudent to re-run the installer command to bring in new changes from the default `webpacker.yml` template. Differences will have to be merged intentionally to avoid losing project-specific customizations.

### Limitations

The `webpacker.yml` config file does not work with ERB as is typical with other Rails YAML config files, since the file must also be read in JavaScript. This may come as a surprise as indicated by recent issues, e.g. [#1615](https://github.com/rails/webpacker/issues/1615), [#956](https://github.com/rails/webpacker/issues/956).

One possible workaround is to use one of the supported [ENV var overrides](#env-var-overrides). It may also be an option to manipulate the JavaScript config in one of the `config/webpack` JavaScript files—look for a future post on the subject.

### ENV var overrides

Some Rails configuration can be overriden via ENV vars. This is especially helpful to workaround certain [limitations](#limitations). Many of the `dev_server` options can be specified in upcase with the prefix `WEBPACKER_DEV_SERVER_`, as illustrated below:

```sh
WEBPACKER_DEV_SERVER_HOST=localhost \
WEBPACKER_DEV_SERVER_PORT=8765 \
WEBPACKER_DEV_SERVER_PUBLIC=localhost:8765 \
./bin/webpack-dev-server
```

Other supported Webpacker ENV vars include:

```sh
WEBPACKER_NODE_MODULES_BIN_PATH
WEBPACKER_RELATIVE_URL_ROOT
WEBPACKER_ASSET_HOST
```

## Javascript config

When [adjusting webpacker.yml](/blog/how-to-use-webpacker-yml.html) is not enough, it might be necessary to modify Webpacker's default webpack configuration. Configuring webpack is precisely the main job of Webpacker's NPM package, `@rails/webpacker`.

First, we'll take a look at the environment-specific JavaScript files Webpacker installs in the `config/webpack/` directory within your Rails application:

```sh
$ tree config/webpack
config/webpack
├── development.js
├── environment.js
├── production.js
└── test.js
```

For experienced frontend developers wondering _where is `webpack.config.js`?_, it's here, as `config/webpack/{development,test,production}.js`; there is a separate config file for each Rails environment.

These files are to webpack configuration what Ruby config files `config/environments/{development,test,production}.rb` are Rails configuration: the place to customize environment-specific needs. Similar to how `config/application.rb` is the shared configuration for all Rails environments, `config/webpack/environment.js` is the shared webppack configuration for each environment.

The `config/webpack/base.js` file is where the default webpack configuration is imported via `@rails/webpacker`.

```javascript
// config/webpack/base.js
const { webpackConfig } = require('@rails/webpacker')

module.exports = webpackConfig
```

Each of the environment-specific files are more or less the same; they import the base `environment` object and must convert it to a JavaScript object that matches the webpack configuration schema:

```javascript
// config/webpack/development.js
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const webpackConfig = require('./base')

module.exports = webpackConfig
```
