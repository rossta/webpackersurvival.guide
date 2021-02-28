# Why is this so difficult?

Unfortunately, the transition to Webpacker from Sprockets has been difficult for many developers and teams. Webpacker hasn’t prevented developers from having to learn webpack. Not everyone agrees with its design or its defaults.

## Modular JavaScript

We just don’t “get” JavaScript modules.

Lack of familiarity with how JavaScript modules has been a big issue. Modular JavaScript is a dramatic shift in how we write and compile code. Sure, life with the Rails asset pipeline was much simpler. With webpack, we cannot rely on global code execution by default as before.

## jQuery and webpack don’t play nice

Rails and jQuery go back a long way. Until recently, a default Rails application would come with jQuery integration in the Rails asset pipeline. jQuery used to be a dependency for Rails unobtrusive JavaScript (UJS). While jQuery is no longer provided by default in new Rails apps, many legacy Rails applications are still running on jQuery and, for many Rails developers, jQuery is our bread-and-butter when it comes to browser-based JavaScript.

## Configuration hurts

Webpack configuration lacks the developer friendliness we know and love in Rails. It's no secret, webpack is a capricious beast. Webpacker aims to reduce the overhead in getting up-and-running with webpack, but there's still some basics you're forced to learn.

## So. Many. Packages

The JS community moves at a fast pace making it difficult to keep up. Babel, PostCSS, browserslist, React, Vue, Angular, Stimulus, webpack, node modules, NPM, yarn...

> Argggghhhhh!!!
>
> —Rails developers, everywhere

## Lack of Resources

Webpacker was released back in 2016.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Rails 5.1 will ship with Yarn to manage JS dependencies and --webpack to compile app-like JS via Webpacker: <a href="https://t.co/iWFNgO87d3">https://t.co/iWFNgO87d3</a></p>&mdash; DHH (@dhh) <a href="https://twitter.com/dhh/status/808348184481124352?ref_src=twsrc%5Etfw">December 12, 2016</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It took until early 2021 for there to be an official Rails guide

Rails developers has been missing a single authority for getting their Webpacker questions answered—until now!

This resource, the [Webpacker Survival Guide](/), exists to address these pains.
