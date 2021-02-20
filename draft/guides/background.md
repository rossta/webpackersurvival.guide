# Background

Since Rails version 3, dating back to 200x, Rails has provided the asset pipeline as a means to bundling JavaScript, CSS, and images for the browser. The asset pipeline has allowed us Rails developers to organize their JavaScript and CSS into as many files and in whatever manner we desire and to package those source files in an optimized form for the browser.

This typically has meant your JavaScript gets minified, gzipped, and rolled up into a single file (or just a few files). The asset pipeline does a few other things, like allows us to write in CoffeeScript or SASS, and to pull assets in from third-party gems. And this has worked pretty well for a long time.

Webpacker was introduced along with the [Rails 5.1 release](https://weblog.rubyonrails.org/2017/4/27/Rails-5-1-final/) as an optional dependency. Later Webpacker was made the default JavaScript compilere for new applications as part of [the Rails 6.0 release](https://weblog.rubyonrails.org/2019/8/15/Rails-6-0-final-release/).

## What is Webpacker?

Webpacker is a Rails wrapper around the webpack build system that provides a standard webpack configuration and reasonable defaults. It's comprised of a [Ruby gem](https://rubygems.org/gems/webpacker/versions/0.1) and an [NPM package](https://www.npmjs.com/package/@rails/webpacker) that work in tandem.

## What is webpack?

The goal of webpack, or any front-end build system, is to allow you to write your front-end code in a way that is convenient for developers and then package that code in a way that is convenient for browsers. With webpack, you can manage JavaScript, CSS, and static assets like files or fonts. Webpack will allow you to write your code, reference other code in your application, transform you code, and combine your code into easily downloadable packs.
