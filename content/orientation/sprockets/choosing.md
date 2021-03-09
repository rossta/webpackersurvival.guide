---
title: Choosing between Webpacker and Sprockets
---

The good news is there's no need to stress about it. Rails defaults mirror the preferred approach of the Basecamp team, but that doesn't mean you have to agree or that it's the right way to do things for your application. You can use both, as Basecamp does, or choose one over the other.

To help you decide, see the following guide

## Why Sprockets?

- My Rails app does not need much JavaScript
- I prefer global scripts and jQuery plugin enhancement, i.e. I don't need a proper JavaScript module system
- Upgrading my legacy Rails app to Webpacker would be too costly
- I don't need advanced tooling for local development
- It just works and I don't have time to ramp up on alternatives
- My Rails app relies on specific asset gems and I don't have NPM alternatives

## Why not Sprockets?

- Sprockets is slowing down my local development experience
- I need more control over aspects of our asset compilation
- My app has a lot of JavaScript and needs code-splitting features to avoid massive payloads
- I'm concerned about long-term support

## Why Webpacker?

- I want to use a proper JavaScript module system to manage dependencies, i.e., limit global scope pollution and have an explicit dependency graph with import/export and require
- I want to take advantage of the cutting edge features from ES6+, Babel, PostCSS
- I want intelligent code-splitting features such as dynamic imports and webpack's splitChunks optimization
- I want more flexibility with how my build system generates source maps
- I want advanced tooling for local development including hot module replacement
- I want to build Single Page Apps\*

\*You don't need to have a Single Page App to use webpack; it works quite well for "Multi Page Apps".

## Why not Webpacker?

- My Rails app does not need much JavaScript
- I am a backend developer with limited knowledge of JavaScript ecosystem
- I am not ready to invest time to understand webpack and Webpacker
- I just don't like it: too complicated / too confusing / much different than what I'm used to

## Why use both?

- I prefer the "Rails way": Webpacker to compile JavaScript, Sprockets for CSS, images, and fonts
- I'm upgrading from Sprockets to Webpacker incrementally

## Resources

https://github.com/reactjs/react-rails/wiki/Choosing-Sprockets-or-Webpacker
