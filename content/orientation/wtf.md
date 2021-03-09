---
title: What are we even doing?
---

## WTF is Webpacker?

Webpacker is a Rails tool for bundling JavaScript, CSS, image, and other frontend assets. Sprockets and the Rails asset pipeline was designed to serve the same purpose ([Confused about why Rails includes both? That’s OK](https://rossta.net/blog/why-does-rails-install-both-webpacker-and-sprockets.html)).

Webpacker wraps the node.js library, [webpack](https://webpack.js.org). Kind of like how ActiveRecord is an abstraction over SQL. Or what ActiveStorage is to cloud storage services.

When you use Webpacker, it's really webpack under the hood doing the work to bundle JavaScript, CSS, image and other frontend assets.

Webpacker makes webpack work with Rails.

## WTF is webpack?

First, let's acknowledge: webpack is hard. It's OK to feel frustrated. It may help to know that you're not alone.

If you’re struggling to make Webpacker work, it could be a bug or because of a surprising Webpacker default. But, most likely it’s because you’re missing some knowledge about webpack, how it works, and what it’s trying to do.

## What problem does webpack solve?

### Bundling

Webpack is currently the most widely used asset bundler in the JavaScript community by a large margin.

Like Sprockets, webpack lets you organize your JavaScript and CSS in separate files and can bundle them up into a single or a few files to be served in the browser. The webpack bundling process can be extended to translate flavors of JavaScript (TypeScript, ES6, CoffeeScript) and flavors of CSS (SASS/SCSS, LESS, whatever Tailwind is) into output that target browsers can understand.

### Modularization

The fundamental difference between Sprockets and webpack that you must understand:

Webpack provides a module runtime. Sprockets does not.

Webpack treats every file as a separate module. This means every file has its own scope. All your webpack code is isolated from the global scope. Code from other files must be explicitly imported. Code to be shared with other files must be explicitly exported.

### Flexibility

Webpack is itself designed to be extremely flexible and extensible. This allows it to be adapted to a wide variety of needs and use cases. There are countless webpack plugins for transformations of various source code syntaxes (TypeScript, ES6, React JSX, Vue single file components, etc) and for controlling the structure of the output.

This flexibility comes with a price: webpack can be quite difficult to understand. The documentation is quite dense. Webpack itself has a large number of configuration options with perplexing names not to mention distinct configuration for many of its third-party plugins.

### Optimization

One final selling point of webpack is its optimization features. With webpack, you can programmatically split and asynchronously load parts of your bundles to improve perceived load times and avoid sending more JavaScript than required.

### Resources

https://what-problem-does-it-solve.com/webpack/index.html

## Why do we need Webpacker?

Webpack can do a lot of things Sprockets can’t do. But, unlike Sprockets, webpack is written in JavaScript and lacks built-in integration for Rails.

That’s where Webpacker comes in. Webpacker’s job is to provide the Ruby and JavaScript helpers and configuration to make webpack work with Rails.

Webpacker is the glue that holds Rails and webpack together.
