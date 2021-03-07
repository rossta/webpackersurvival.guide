---
title: Why is this so difficult?
---

Unfortunately, the transition to Webpacker from Sprockets has been difficult for many developers and teams. Webpacker hasn’t prevented developers from having to learn webpack. Not everyone agrees with its design or its defaults.

## webpack is fundamentally different

> Wait, don't Sprockets and Webpacker do basically the same thing?

Yes and no.

"Yes" in that Sprocket and webpack are both, generally speaking, tools for bundling JavaScript, CSS, images, and other static assets for the browser. But—

Sprockets and webpack are designed quite differently. They make very different assumptions about where your JavaScript lives on disk, how it should be bundled together, and what happens during the compilation process.

To be frank, it's impossible to make them behave the same way. If you're expecting Webpacker to work just like Sprockets, you're going to be let down.

## We don’t understand modules

One of the big adjustments Rails developers typically need to make with Webpacker (or any modern asset bundler) is understanding modular JavaScript.

Modular JavaScript is a dramatic shift in how we write and compile code. Sure, life with the Rails asset pipeline was much simpler. With webpack, we cannot rely on global code execution by default as before.

Lack of familiarity with the practical mechansisms of modules has been a big issue as proven by numerous GitHub issues and StackOverflow questions.

## jQuery and webpack don’t play nice

Rails and jQuery go back a long way. Until recently, a default Rails application would come with jQuery integration in the Rails asset pipeline. jQuery used to be a dependency for Rails unobtrusive JavaScript (UJS). While jQuery is no longer provided by default in new Rails apps, many legacy Rails applications are still running on jQuery and, for many Rails developers, jQuery is our bread-and-butter when it comes to browser-based JavaScript.

## Configuration hurts

Webpack configuration lacks the developer friendliness we know and love in Rails. It's no secret, webpack is a capricious beast. Webpacker aims to reduce the overhead in getting up-and-running with webpack, but there's still some basics you're forced to learn.

## So. Many. Packages

> Argggghhhhh!!!
>
> —Rails developers, everywhere

The JS community moves at a fast pace making it difficult to keep up. Babel, PostCSS, browserslist, React, Vue, Angular, Stimulus, webpack, node modules, NPM, yarn...

## Lack of Resources

Webpacker was released back in 2016.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Rails 5.1 will ship with Yarn to manage JS dependencies and --webpack to compile app-like JS via Webpacker: <a href="https://t.co/iWFNgO87d3">https://t.co/iWFNgO87d3</a></p>&mdash; DHH (@dhh) <a href="https://twitter.com/dhh/status/808348184481124352?ref_src=twsrc%5Etfw">December 12, 2016</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It took until early 2021 for there to be an official Rails guide. There has been some community-driven documentation buried in the Webpacker repository.

Rails developers has been missing a single authority for getting their Webpacker questions answered—until now!

This resource, the [Webpacker Survival Guide](/), exists to address these pains.
