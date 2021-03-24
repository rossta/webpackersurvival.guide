# Webpacker Overview

Sprockets and webpack are designed to solve the same general problem: bundle assets for the browser. They go about solving this problem in very different ways.

## Tooling is different

Sprockets is implemented in Ruby and deeply integrates with Rails. It is installed from rubygems.org with bundler like most other open-source Ruby gems.

Webpack, on the other hand, is a JavaScript tool that runs on node.js, which means, to use webpack with Rails, node.js is a requirement along side Ruby.

node.js libraries are called packages and are distributed via the Node Package Manager, or NPM,. NPM for JavaScript is analogous to Rubygems for Ruby.

Installing webpack from NPM is typically done with either the `npm` and `yarn` command line tools—two competing projects.

| Task            | Sprockets    | webpack                   |
| --------------- | ------------ | ------------------------- |
| Runtime         | ruby         | node.js                   |
| Distributed via | Rubygems.org | Node Package Manger (NPM) |
| Installed with  | bundler      | `yarn` or `npm`           |

Webpacker is two tools: a Ruby gem, 'webpacker', and an NPM JavaScript package, '@rails/webpacker', used in concert to form the glue between Rails and webpack.

## Installation and upgrading is different

To make Webpacker work with a Rails project, both the gem and NPM package must be installed on the same semantic version.

Typically, Rails developers will install the gem first, either on its own or as part of generating a new Rails app. The Webpacker gem provides an install task to set up configuration files and dependencies.

```ruby
gem 'webpacker'
```

```sh
$ bundle
$ bundle exec rake webpacker:install
```

The install task:

- installs '@rails/webpacker', 'webpack', and other required NPM dependencies to your Rails project using `yarn`
- adds a number of JavaScript config files for webpack
- adds a webpacker.yml file in the config/ directory
- adds binstubs for running webpack and the webpack-dev-server

```sh
app/
  bin/
    webpack
    webpack-dev-server
  config/
    webpack/
      base.js
      development.js
      production.js
      test.js
    webpacker.yml
  javascript/
    packs/
      application.js
  node_modules/
    @rails/webpacker/
    webpack/
    # lots of other NPM dependencies!
```

## Code organization looks different

Webpacker by default look for files in your app/javascript/ directory and in the node_modules/ directory.

You'll place your app code in app/javascript and yarn will install third-party packages from NPM in your node_modules/ directory. The node_modules/ directory typically should not be checked into version control.

If you want to rename the app/javascript/ directory, edit both the directory name and the `source_path` entry in `config/webpacker.yml` match.

```yaml
source_path: app/frontend
```

When the app/javascript/ directory when generated will look like the following:

```sh
app/
  javascript/
    packs/
      application.js
```

This point is key: each file in the app/javascript/packs/ directory is treated as an _entry point_ in webpack. An entry point is the start of a webpack dependency graph.

> Only put entry point files in the app/javascript/packs/ directory.

Generally, you'll want no more than a few files in app/javascript/packs/. Examples might be 'application.js' or 'admin.js'. If you have a lot of files in the packs/ directory, webpack compilation can get quite slow. See [Overpacking: a common Webpacker mistake](https://rossta.net/blog/overpacking-a-common-webpacker-mistake.html) for more information about this concern.

> To learn more, see the webpack docs for [entry points](https://webpack.js.org/concepts/entry-points/)

Your application logic should be placed in a sibling directory to packs. I recommend a directory structure such as the following:

```sh
app/
  javascript/
    src/            # example sub directories
      widgets/
      helpers/
      initializers/
    packs/
      application.js
```

This structure is flexible enough to add stylesheets and images as siblings to your JavaScript src:

```sh
app/
  frontend/
    src/
      widgets/
      store/
      api/
    packs/
      application.js
    images/
    stylesheets/
```

Or, as is common for project built with component-based frameworks like React, your CSS and images can live in the same directories as your JavaScript components:

```sh
app/
  frontend/
    src/
      components/
        HelloWorld/
          HelloWorld.jsx
          helloworld.css
          helloworld.jpg
      helpers/
      initializers/
    packs/
      application.js
```

## Compiling your code works differently

When the Webpacker installation script is run, it will generate two binstubs:

```sh
bin/
  webpack
  webpack-dev-server
```

Execute `bin/webpack` binstub to compile Rails Webpacker assets into the `public/packs` directory:

```sh
$ bin/webpack
```

This binstub is a Ruby wrapper script that shells out to the `webpack` executable which itself will run in a node.js process. Why not call `webpack` directly? Well the Ruby portion of the script loads the `config/webpacker.yml` file and selected ENV vars, determines which `webpack` config to use, and provides some caching logic to help skip successive builds. The Rails server will run this executable when the `compile` option is set to true in `config/webpacker.yml`:

```yaml
compile: true
```

The output of the Webpacker build will emit files in the `public/packs/` directory.

```sh
app/
  frontend/
    packs/            # entryp oints
      application.js
public/
  packs/              # output
    js/
      application-1234..def.js
```

The `bin/webpack-dev-server` binstub is also a Ruby wrapper script for compiling Webpacker assets. It spins up a separate node.js web server called the webpack-dev-server which builds assets in memory. In development, the rails server will detect when the webpack-dev-server is running and proxy Webpacker asset requests via Webpacker middleware. The [webpack-dev-server has many configuration options](TODO), including the ability to "live-reload" the browser when assets change or even to reload individual modules on the fly without refreshing the page, a technique known as [hot-module-reloading](TODO).

Since using the webpack-dev-server alongside the rails server requires multiple processes, it's common to use a process manager to make it easier to start and stop both servers with a single command. With a tools like [foreman](TODO) or [overmind](TODO), you might use a Procfile file like the following.

```yaml
# Procfile.dev
rails: bin/rails s
webpack: bin/webpack-dev-server
```

```yaml
compile: false
```

---

- Webpack is built on Node not Ruby
- Webpack comes with a development server
- Sprockets: on demand
- Webpacker: lots of flexibility
- Compile via shell
  - on demand
  - up-front
- Compile via dev-server:
  - up-front
  - in-memory, watch mode
  - live-reload
- Where does output go
- Deployment
  - asset:precompile
  - Heroku requirements
- Gotchas
  - running integration tests with on demand compilation
  - dependencies vs devDependencies
- Understanding output
- Gotchas:
  - You can accidentally duplicate code if you don't know what you're doin

## Writing your code will be different

Webpack is a module bundler. Practically speaking, this means every file in a webpack build is treated as a separate module (this is true for any other module builder, including Parcel, rollup, esbuild, etc.). This is not true of Sprockets.

Though most modern browsers support native modules, webpack creates a "module runtime" in your bundled code to emulate a native module system.

When it comes to writing webpack-bundled code, here is the key point:

> Each module has its own scope

To access code between modules through exports and imports. A given module must be explicitly imported in any other module where you wish to use it.

````js
import $ from "jquery"

import { Button } from '../src/components/Button'

export function(selector) {
  return $(selector).map(/*...*/)
}

export function(element) {
  return new Button(element)
}
```

Each module has lexical scope with respect to the `window` or global scope; i.e., modules can access the `window` object but code in the global scope or in other modules cannot directly access code within a given module.

That means the following won't work:
```js
import "jquery"
````

```html
<script type="text/javascript">
  $('...') // Uncaught ReferenceError: $ is not defined
</script>
```

### Bridging the gap between Ruby and JavaScript

This is a big shift from the Rails asset pipeline.

- Webpacker does NOT expose your code to the global scope by default
- Understanding JavaScript modules
- You may need to jump through hoops to use your jQuery plugins

## Requiring code works differently

- How to require / import files
- Understanding import/export syntax
- How to "require tree" vs require.context
- What's the difference between require and import?

## Shared code comes from NPM not Rubygems

- NPM packages vs asset gems
- node_modules directory
- understanding package.json
- Gotchas
  - switching branches
  - no imports from Rails asset gems
    - Webpacker does not handle Rails asset gems by default

## Compiling your code works differently

- Webpack is built on Node not Ruby
- Webpack comes with a development server
- Sprockets: on demand
- Webpacker: lots of flexibility
- Compile via shell
  - on demand
  - up-front
- Compile via dev-server:
  - up-front
  - in-memory, watch mode
  - live-reload
- Where does output go
- Deployment
  - asset:precompile
  - Heroku requirements
- Gotchas
  - running integration tests with on demand compilation
  - dependencies vs devDependencies
- Understanding output
- Gotchas:
  - You can accidentally duplicate code if you don't know what you're doing

## Rendering code works differently

- Compare view helpers
  - Attach JavaScript javascript_link_tag javascript_pack_tag
  - Attach CSS stylesheet_link_tag stylesheet_pack_tag
  - Link to an image image_url image_pack_tag
  - Link to an asset asset_url asset_pack_tag
  - Require a script //= require import or require
- Locating assets: the Manifest

## Configuration looks different

- Modest intro to webpack configuration
- Modest intro to Webpacker configuration
- Modifying the configuration

## Webpacker and Sprockets can both be used together

## Webpacker CAN bundle CSS

- Extracting CSS

## Webpacker CAN bundle images

- Specifying images for view helpers
- Webpacker does not bundle images by default

## Webpack has special powers

- can remove dead code
- Webpack allows you to import code dynamically
- Webpack can optimize your bundles for you
