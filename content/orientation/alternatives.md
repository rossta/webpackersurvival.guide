---
title: Alternatives to Webpacker
description: This article describes alternatives to Webpacker that will allow Rails developers to take advantage of JavaScript modules and the JavaScript ecosystem, including custom webpack integration, Vite.js, and Snowpack.
---

Though Webpacker is the default JavaScript compiler for Rails, there are alternatives you may want to consider.

## Sprockets

Sprockets is also officially supported in the Rails ecosystem and still works for many teams for its relative simplicity. See our article on [choosing between Webpacker and Sprockets](./sprockets/chooosing) for more details on why you might consider using Webpacker, Sprockets, or both in your Rails app.

## Module-aware bundlers

:::caution TODO
Expand on options
:::

### Custom webpack integration

Webpacker attempts to abstract away from developers the complexity of webpack configuration, which can be difficult to learn and understand. But for developers familiar with webpack and it config, this may come at a price.

It is certainly possible to "roll your own" webpack configuration with Webpacker. You could even go one step further and replace Webpacker altogether by supporting the Ruby and JavaScript bindings to allow Rails and webpack to work together.

### Parcel

### Rollup

### Vite

### Snowpack

### Rome

### Brunch

### Browserify
