# WTF

What are we even doing?

## WTF is Webpacker?

Webpacker is a Rails-specific tool for bundling JavaScript, CSS, image, and other frontend assets. So is Sprockets. [Confused? That’s OK](https://rossta.net/blog/why-does-rails-install-both-webpacker-and-sprockets.html).

Webpacker is a wrapper around the Node.js library, webpack. Kind of like how ActiveRecord is an abstraction over SQL. Or what ActiveStorage is to cloud storage services.

So it’s more accurate to say, when you use Webpacker, it’s webpack that bundles JavaScript, CSS, image and other frontend assets.

Webpacker makes webpack work with Rails.

## WTF is webpack?

Let's acknowledge something right off.
Webpack is hard.
It's ok to feel frustrated.
It may help to know that you're not alone.

If you’re struggling to make Webpacker work, it could be a bug or because of a surprising Webpacker default. But, most likely it’s because you’re missing some knowledge about webpack, how it works, and what it’s trying to do.

## What problem does webpack solve?

### Bundling

Webpack is currently the most widely used asset bundler in the JavaScript community by a large margin.

Like Sprockets, webpack lets you organize your JavaScript and CSS in separate files and can bundle them up into a single or a few files to be served in the browser. The webpack bundling process can be extended to translate flavors of JavaScript (TypeScript, ES6, CoffeeScript) and flavors of CSS (SASS/SCSS, LESS, whatever Tailwind is) into output that target browsers can understand.

### Modularization

The fundamental difference between Sprockets and webpack that you must understand:

webpack provides a module runtime. Sprockets does not.

Webpack treats every file as a separate module. This means every file has its own scope. All your webpack code is isolated from the global scope. Code from other files must be explicitly imported. Code to be shared with other files must be explicitly exported.

### Flexibility

Webpack is itself designed to be extremely flexible and extensible so that it can serve a variety of needs and use cases. There are countless webpack plugins for transformations of various source code syntaxes (TypeScript, ES6, React JSX, Vue single file components, etc) and for controlling the structure of the output.

This flexibility comes with a price: webpack can be quite difficult to understand. The documentation is quite dense. Webpack itself has a large number of configuration options with perplexing names not to mention distinct configuration for many of its third-party plugins.

### Optimization

One final selling point of webpack is its optimization features. With webpack, you can programmatically split and asynchronously load parts of your bundles to improve perceived load times and avoid sending more JavaScript than required.

### Resources

https://what-problem-does-it-solve.com/webpack/index.html

## So why do we need Webpacker?

webpack can do a lot of things Sprockets can’t do. But, unlike Sprockets, webpack is written in JavaScript and lacks built-in integration for Rails.

That’s where Webpacker comes in. Webpacker’s job is to provide the Ruby and JavaScript helpers and configuration to make webpack work with Rails.

Webpacker is the glue that holds Rails and webpack together.
