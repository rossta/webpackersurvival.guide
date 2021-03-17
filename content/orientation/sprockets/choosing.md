---
title: Choosing between Webpacker and Sprockets
sidebar_label: Choosing
---

The good news is there's no need to stress about it. Rails defaults mirror the preferred approach of the Basecamp team, but that doesn't mean you have to agree or that it's the right way to do things for your application. You can use both, as Basecamp does, or choose one over the other.

To help you decide, see the following guide.

## What both Sprockets and Webpacker do

- ✅ combine many source files into one or a few destination bundles for production
- ✅ transpile source files from one syntax to another
- ✅ minify and fingerprint assets when building for production
- ✅ rebuild modified source files in development incrementally
- ✅ do all of the above for both JavaScript and CSS

## What Sprockets does better than Webpacker

- ✅ Sprockets is written in Ruby and more-easily integrates with Rails
- ✅ Rails asset gems typically don’t require any configuration and typically “just work”
- ✅ jQuery integration - jQuery and its plugin ecosystem pre-dates modular JavaScript and tend to assume you’re in the global scope; this pair well with the way Sprockets works

## What Webpacker does better than Sprockets

- ✅ Take advantage of modern ES features through Babel and PostCSS
- ✅ Integrate with next generations frontend frameworks like React, Vue, and Angular
- ✅ Split your code into smaller, cacheable fragments, both statically and dynamically, to help developers minimize latency in end user download, parse, and execute times
- ✅ There are a wide variety of configurable source map options

## Should I use Sprockets?

**Pros**

- ✅ My Rails app does not need much JavaScript
- ✅ I prefer global scripts and jQuery plugin enhancement, i.e. I don't need a proper JavaScript module system
- ✅ Upgrading my legacy Rails app to Webpacker would be too costly
- ✅ I don't need advanced tooling for local development
- ✅ It just works and I don't have time to ramp up on alternatives
- ✅ My Rails app relies on specific asset gems and I don't have NPM alternatives

**Cons**

- ⛔️ Sprockets is slowing down my local development experience
- ⛔️ I need more control over aspects of our asset compilation
- ⛔️ My app has a lot of JavaScript and needs code-splitting features to avoid massive payloads
- ⛔️ I'm concerned about long-term support
- ⛔️ I want to be able to fully leverage the JavaScript ecosystem

## Why Webpacker?

**Pros**

- ✅ I want to use a proper JavaScript module system to manage dependencies, i.e., limit global scope pollution and have an explicit dependency graph with import/export and require
- ✅ I want to take advantage of the cutting edge features from ES6+, Babel, PostCSS
- ✅ I want intelligent code-splitting features such as dynamic imports and webpack's splitChunks optimization
- ✅ I want more flexibility with how my build system generates source maps
- ✅ I want advanced tooling for local development including hot module replacement
- ✅ I want to build Single Page Apps\*

\*You don't need to have a Single Page App to use webpack; it works quite well for "Multi Page Apps".

**Cons**

- ⛔️ My Rails app does not need much JavaScript
- ⛔️ I don't want node.js as a dependency
- ⛔️ I am a backend developer with limited knowledge of JavaScript ecosystem
- ⛔️ I am not ready to invest time to understand webpack and Webpacker
- ⛔️ Too complicated / too confusing / much different than what I'm used to

## Why use both?

- ✅ I prefer the "Rails way": Webpacker to compile JavaScript, Sprockets for CSS, images, and fonts
- ✅ I want to use some functionality that I can only get from Rails asset gem(s) and some other functionality that I can only use with Webpacker
- ✅ I'm upgrading from Sprockets to Webpacker incrementally

## Resources

https://github.com/reactjs/react-rails/wiki/Choosing-Sprockets-or-Webpacker
