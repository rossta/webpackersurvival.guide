---
title: Survival Tips for Rails Developers
sidebar_label: Survival Tips
description: Listing ideas for Rails developers to keep in mind when adopting Webpacker in Rails 5 or Rails 6 applications for this first time given prior experience with the Rails asset pipeline.
---

So you've decided to forge ahead with Webpacker? Great!

Here are some important ideas to keep in mind, especially if you are familiar with the classic Rails asset pipeline and getting to know webpack and Webpacker for this first time... or second, or third.

## Tip 1: Don't assume Webpacker conventions match Sprockets conventions

If you're expecting for everything to work in Webpacker exactly the same as it did with Sprockets, then you're going to be disappointed.

Webpacker tries hard to provide conventions that Rails developers have come to expect and an abstraction layer to hide away the complexity of webpack configuration. Still, Webpacker doesn't seamelessly support features you've come to expect with Sprockets. For example, [Rails engine support requires extra configuration and patching](http://ben.vandgrift.com/posts/rails-engine-webpacker-1/).

One Webpacker convention that trips up first time users is its directory structure. A common mistake is to put too many (or all) JavaScript files in the entry points directory. This can result in unintended consequences like longer-than-normal build times and potentially duplicated modules on a page from creating non-overlapping dependency graphs. See the articles below for more details.

- [Overpacking: a Common Webpacker mistake](https://rossta.net/blog/overpacking-a-common-webpacker-mistake.html)
- [These Rails apps are overpacking their JavaScript bundles](https://rossta.net/blog/rails-apps-overpacking-with-webpacker.html)

:::tip
[Entry points](https://webpack.js.org/concepts/entry-points/) in webpack are the files where webpack will start its compilation. These files are at the top of the dependency graph(s). By Webpacker convention, one of the application directories is intended only for the top-level files, JavaScript and CSS files that will server as the entry points to webpack compilation. In Webpacker 6, this is the `app/packs/entrypoints` directory specified as the `source_entry_path` in the `config/webpacker.yml`,
:::

## Tip 2: Accept webpack values control over friendliness

Example:

- [require.context vs require_tree](/) - TODO: add link

## Tip 3: Know your dependencies (and their dependencies, etc)

Example:

- [Code splitting conventions](/) - TODO: add link

## Tip 4: Replace (or fix) legacy code

A lot of JavaScript code out there is written or compiled without knowledge or expectation of a module-aware environment like webpack. Legacy code tends to assume the presence of global variables instead of imports or they create global variables which should instead be exports. Old jQuery plugins are a great example of this.

Example:

- [Module shimming](https://webpack.js.org/guides/shimming/)

## Tip 5: Understand the webpack runtime

Reading the unminified output of a small webpack build can be very informative. webpack will wrap each of your source files in a function which acts as the "module" form in the browser. It will also insert a snippet of generated code, often referred to as the "runtime," to provide a module system.

- [Webpack Tutorial: Understanding how it works](https://medium.com/ag-grid/webpack-tutorial-understanding-how-it-works-f73dfa164f01)
- [Predictable long term caching with webpack](https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31)

## Tip 6: Use dynamic code splitting

## Tip 7: Remember: Webpacker and Sprockets are fundamentally different

Making legacy jQuery plugins work with webpack can be difficult. You might be surprised the first time you realize that JavaScript imported from Webpacker is not available in the global scope.
