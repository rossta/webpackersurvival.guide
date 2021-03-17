---
title: Alternatives to Webpacker
sidebar_label: Alternatives
description: This article describes alternatives to Webpacker that will allow Rails developers to take advantage of JavaScript modules and the JavaScript ecosystem, including custom webpack integration, Vite.js, and Snowpack.
---

Though Webpacker is the default JavaScript compiler for Rails, there are alternatives you may want to consider.

## Sprockets

Sprockets is also officially supported in the Rails ecosystem and still works for many teams for its relative simplicity. See our article on [choosing between Webpacker and Sprockets](/orientation/sprockets/chooosing) for more details on why you might consider using Webpacker, Sprockets, or both in your Rails app.

## Rails and webpack without Webpacker

Webpacker attempts to abstract away from developers the complexity of webpack configuration, which can be difficult to learn and understand. But for developers familiar with webpack and it config, this may come at a price.

### Minipack

[Minipack](https://github.com/nikushi/minipack) is a good option for developers looking to use webpack with Rails but without hiding away the webpack config
the way Webpacker does. Minipack is a gem that provides just a subset of Webpacker's functionality including Rails view helpers and compilation commands; it's up to developers to bring their own webpack configuration.

### "Roll your own"

You could go one step further and implement your own Rails view helpers and compilation commands. One thing gems like Webpacker and Minipack have in common is a contract with the webpack configuration to output a manifest, typically a JSON file, that maps canonical bundle names to their fingerprinted versions. Rails view helpers parse this file to convert something like the ERB source below to the HTML that follows:

```erb title="app/views/layouts/application.html.erb"
<%= javascript_pack_tag 'application' %>
```

```html
<script src="/packs/js/application-12345678abcdefg.js"></script>
```

## Other module bundlers

### Rollup

[Rollup](https://rollupjs.org/guide/en/) is a node.js tool that solves most of the same problems as webpack. Rollup's focus on ES modules allows it to be more streamlined and [some would argue](https://medium.com/@PepsRyuu/why-i-use-rollup-and-not-webpack-e3ab163f4fd3), a better developer experience. ["The same, but different"](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c) as Rollup author, Rich Harris, puts it.

**Rails support** for standalone Rollup usage is unknown.

### Vite

[Vite](https://vitejs.dev/) is a node.js tool that provides a dev server which enhances [native ES modules](https://v8.dev/features/modules) (or ESM) with a "lightning fast" development experience and hot module reloading by using what is sometimes called the "no-bundler" approach. Vite delegates to Rollup to build production bundles.

**Rails support** is in development.

- [vite_ruby](https://github.com/ElMassimo/vite_ruby) is a recent project that creates Ruby bindings for Vite and is compatible with Rails apps.

### Snowpack

[Snowpack](https://www.snowpack.dev/) is another "no-bundler" tool that advertises a "lightning fast" experience. Similar to [Vite](#vite), Snowpack works through native ES modules and supports similar features. One reason Snowpack and Vite can claim faster build times than webpack is because of their focus and slimmer feature set.

**Rails support** is in development.

- [Snowpacker](https://github.com/ParamagicDev/snowpacker) provides Rails integration for Snowpack. Similar to Webpacker, it is both a gem and an npm package.

### Parcel

[Parcel](https://parceljs.org/) is a node.js-based asset bundler that requires zero configuration to bundle JavaScript, CSS, and other static assets. Compared to webpack, it boasts fewer dependencies and faster build times. It supports some webpack-comparable features like dynamic `import()` statements and hot module reloading, it does not attempt to solve all the problems webpack does.

**Rails support** is in development.

- [parcel-rails](https://github.com/michaldarda/parcel-rails) is a gem to integrate Rails with Parcel.

### esbuild

Relatively new, [esbuild](https://esbuild.github.io/) is a bundler and minifier primarily focused on speed. Its homepage boast results that puts it several orders of magnitude of other popular bundlers. Though esbuild is distributed as an npm package while its core is written in Go and compiled down to a native binary. Still early in development as of Spring 2021, the effort appears promising.

**Rails support** as a bunder is unknown. It is possible to use esbuild as a minifier with Webpacker/webpack through the [esbuild-webpack-plugin](https://github.com/sorrycc/esbuild-webpack-plugin).

### Skypack

[Skypack](https://www.skypack.dev/) isn't a bundler or even a tool to install; it's a module-aware CDN. Assuming you only need to serve modern browsers that support ES modules, you can load Skypack scripts straight from CDN like the example below:

```js
import confetti from 'https://cdn.skypack.dev/canvas-confetti'

document.getElementById('#confetti').addEventListener('click', () => {
  confetti()
  return false
})
```

**Rails support** isn't strictly necessary—you can start referencing Skypack modules in `<script type="module">` tags.

Examples

- The [madmin](https://github.com/excid3/madmin) Rails engine includes JavaScript snippets that leverage Skypack resources ([source](https://github.com/excid3/madmin/blob/0ac727e62875f2cec553745ff191a7822c872b30/app/views/madmin/application/_javascript.html.erb#L5-L6))
