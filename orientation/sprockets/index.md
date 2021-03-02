---
title: A Tale of Two Bundlers
slug: /sprockets
---

Both Sprockets and webpack will:

- combine many source files into one or a few destination bundles for production
- transpile source files from one syntax to another
- minify and fingerprint assets when building for production
- rebuild modified source files in development incrementally
- do all of the above for both JavaScript and CSS

Stuff that Sprockets does better than Webpacker

- Sprockets is written in Ruby and more-easily integrates with Rails
- Rails asset gems typically don’t require any configuration and typically “just work”
- jQuery - jQuery and its plugin ecosystem pre-dates modular JavaScript and tend to assume you’re in the global scope; this pair well with the way Sprockets works

Stuff Webpacker does better than Sprockets

- Take advantage of modern ES features through Babel and PostCSS
- Integrate with next generations frontend frameworks like React, Vue, and Angular
- Split your code into smaller, cacheable fragments, both statically and dynamically, to help developers minimize latency in end user download, parse, and execute times
- There are a wide variety of configurable source map options

To the Rails core team, Webpacker solves some problems better than Sprockets. But, Sprockets solves some problems better than Webpacker. So a default Rails 6 application includes both.

Resources

https://rossta.net/blog/why-does-rails-install-both-webpacker-and-sprockets.html
