# Installation

## Pre-requisites

## Installation

To make Webpacker work with a Rails project, both the gem and NPM package must be installed on the same semantic version.

Typically, Rails developers will install the gem first, either on its own or as part of generating a new Rails app. The Webpacker gem provides an install task to set up configuration files and dependencies.

```ruby
gem 'webpacker'
```

```sh
$ bundle
$ bundle exec rake webpacker:install
```

The install task add '@rails/webpacker', 'webpack', and other required NPM dependencies to your Rails project.

```sh
app/
bin/
  webpack
  webpack-dev-server
config/
  environments/
    base.js
    development.js
    production.js
    test.js
  webpacker.yml
lib/
node_modules/
  @rails/webpacker/
  webpack/
  // ... lots of other dependencies
```

## Upgrading
