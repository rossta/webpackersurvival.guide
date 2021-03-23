---
title: Survival Tips for Rails Developers
sidebar_label: Survival Tips
description: Listing ideas for Rails developers to keep in mind when adopting Webpacker in Rails 5 or Rails 6 applications for this first time given prior experience with the Rails asset pipeline.
---

So you've decided to forge ahead with Webpacker? Great!

Here are some important ideas to keep in mind, especially if you are familiar with the classic Rails asset pipeline and getting to know webpack and Webpacker for this first time... or second, or third.

## Tip 1: Don't assume Webpacker conventions match Sprockets convention

Example:

- [Overpacking: a Common Webpacker mistake](https://rossta.net/blog/overpacking-a-common-webpacker-mistake.html)
- [These Rails apps are overpacking their JavaScript bundles](https://rossta.net/blog/rails-apps-overpacking-with-webpacker.html)

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
