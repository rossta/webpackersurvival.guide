---
title: A Tale of Two Bundlers
slug: /sprockets
---

Sprockets is written in Ruby and, at this point, primarily exists to serve Rails applications. It is a product of the Ruby community, which means it's packaged and distributed in a way Ruby developers would expect and the project generally reflects its core values.

Webpacker also primarily exists to serve Rails applications. Though part of it is written in Ruby, its primary core—the part that produces assets—is `webpack`, a Node.js command line tool. `webpack` is written in JavaScript. It is packaged a Node.js module and distributed via by the `npm` registry.

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

To the Rails core team, Webpacker solves some problems better than Sprockets. But, Sprockets solves some problems better than Webpacker. Therefore, they decided a default Rails 6 application would include both.

Resources

https://rossta.net/blog/why-does-rails-install-both-webpacker-and-sprockets.html
