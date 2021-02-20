# Webpacker vs Sprockets

A default Rails 6 application will install both Webpacker and Sprockets. This is curious because they serve similar needs, though in very different ways.

## How is Webpacker similar to Sprockets?

Both Webpacker and Sprockets:

- combine many source files into one or a few destination bundles for production
- transpile source files from one syntax to another
- minify and fingerprint assets when building for production
- rebuild modified source files in development incrementally
- do all of the above for both JavaScript and CSS

The following tables provides some idea of how to translate between Webpacker and Sprockets though each tool has a slightly different structure and the concepts don't directly map onto each other.

| Task              | Sprockets           | Webpacker           |
| ----------------- | ------------------- | ------------------- |
| Attach JavaScript | javascript_link_tag | javascript_pack_tag |
| Attach CSS        | stylesheet_link_tag | stylesheet_pack_tag |
| Link to an image  | image_url           | image_pack_tag      |
| Link to an asset  | asset_url           | asset_pack_tag      |
| Require a script  | //= require         | import or require   |

## How is Webpacker different from Sprockets?

Rails also ships with Sprockets, an asset-packaging tool whose features overlap with Webpacker. Both tools will compile your JavaScript into into browser-friendly files, and minify and fingerprint them in production. Both tools allow you to incrementally change files in development.

Sprockets, which was designed to be used with Rails, is somewhat simpler to integrate. In particular, code can be added to Sprockets via a Ruby gem. However, webpack is better at integrating with more current JavaScript tools and NPM packages, and allows for a wider range of integration. It is the current practice of Basecamp to use webpack for JavaScript and Sprockets for CSS, although you can do CSS in webpack.

## Why does Rails ship with both Webpacker and Sprockets?

When it comes to asset bundling, the "Rails way" is webpack for JavaScript and Sprockets for everything else. The default setup in a fresh Rail 6 install, similar to what Basecamp uses, still compiles CSS, images, and fonts with Sprockets.

Here's what DHH said when he introduced webpack as the recommended JavaScript compiler with Rails 5.1:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We will continue to use the asset pipeline for JavaScript sprinkles, CSS, images, and other static stuff. The two approaches coexist great.</p>&mdash; DHH (@dhh) <a href="https://twitter.com/dhh/status/808349072734027776?ref_src=twsrc%5Etfw">December 12, 2016</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

> We will continue to use the asset pipeline for JavaScript sprinkles, CSS, images, and other static stuff. The two approaches coexist great.

## Are you required to use both Webpacker and Sprockets?

No.

The two processes for bundling assets are completely separate and they do not share dependencies. Different helpers, different implementations, different directories, different, different, different. They are built in such a way that they can cohabitate a Rails application.

If you're a member of the "Basecamp camp", all your webpack JavaScript source files would live in `app/javascript` and all your Sprockets CSS and images would remain in `app/assets`. Running `rails assets:precompile` will first build all the Sprockets assets into the `public/assets` directory, then will build all the webpack assets into the `public/packs` directory.

## Why choose one or the other?

You should choose webpacker over Sprockets on a new project, if you want to use NPM packages, and if you want access to the most current JavaScript features and tools.

if you want to integrate using Gems, or if you have a very small amount of code to package.

#### Why Sprockets?

- My Rails app does not need much JavaScript
- I prefer global scripts and jQuery plugin enhancement, i.e. I don't need a proper JavaScript module system
- Upgrading my legacy Rails app to Webpacker would be too costly
- I don't need advanced tooling for local development
- It just works and I don't have time to ramp up on alternatives
- My Rails app relies on specific asset gems and I don't have NPM alternatives

#### Why not Sprockets?

- Sprockets is slowing down my local development experience
- I need more control over aspects of our asset compilation
- My app has a lot of JavaScript and needs code-splitting features to avoid massive payloads
- I'm concerned about long-term support

#### Why Webpacker?

- I want to use a proper JavaScript module system to manage dependencies, i.e., limit global scope pollution and have an explicit dependency graph with import/export and require
- I want to take advantage of the cutting edge features from ES6+, Babel, PostCSS
- I want intelligent code-splitting features such as dynamic imports and webpack's splitChunks optimization
- I want more flexibility with how my build system generates source maps
- I want advanced tooling for local development including hot module replacement
- I want to build Single Page Apps\*

\*You don't need to have a Single Page App to use webpack; it works quite well for "Multi Page Apps".

#### Why not Webpacker?

- My Rails app does not need much JavaScript
- I am a backend developer with limited knowledge of JavaScript ecosystem
- I am not ready to invest time to understand webpack and Webpacker
- It seems too complicated compared to alternatives (Sprockets, Rollup, Parcel, etc.)

#### Why use both?

- I prefer the "Rails way": Webpacker to compile JavaScript, Sprockets for CSS, images, and fonts
- I'm upgrading from Sprockets to Webpacker incrementally
