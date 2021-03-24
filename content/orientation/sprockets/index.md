---
title: A Tale of Two Bundlers
slug: /sprockets
---

Sprockets is written in Ruby and, at this point, primarily exists to serve Rails applications. It is a product of the Ruby community, which means it's packaged and distributed in a way Ruby developers would expect and the project generally reflects its core values.

Webpacker also primarily exists to serve Rails applications. Though part of it is written in Ruby, its primary core—the part that produces asset is [webpack](https://webpack.js.org), a command line tool written in JavaScript that runs on node.js. It is packaged as node.js module and distributed via the [npm registry](https://www.npmjs.com).

## Why does Rails 6 include both?

In Rails 6, Webpacker is the default JavaScript compiler while Sprockets is set up to compile CSS. This is true even though Webpacker is capable of compiling CSS and Sprockets is capable of compiling JavaScript.

So why is this? [Here is DHH's reponse to this question on his GitHub pull request to make Webpacker the default JavaScript compiler in Rails 6](https://github.com/rails/rails/pull/33079#issuecomment-400140840):

[![DHH: webpack's support for CSS is awkward](/img/orientation/sprockets/index/dhh-awkward.png)](https://github.com/rails/rails/pull/33079#issuecomment-400140840)

> @dwightwatson Out of curiousity, what is the argument to continue using Sprockets for CSS/static assets when Webpacker supports them by default out of the box?
>
> @dhh Webpack’s support is awkward in my opinion and does not offer any benefits over Sprockets. Unlike in the realm of JavaScript compilation.

When it comes to asset bundling in Rails 6, the "Rails way" is webpack for JavaScript and Sprockets for everything else. To be very clear, this does not mean you need to run both Sprockets and Webpacker to serve assets for the browser. The two processes for bundling assets are completely separate and they do not share dependencies. They are built in such a way that they can cohabitate a Rails application.

The beauty of Rails is you can still choose: you can choose to stick with the defaults; you can choose to remove Webpacker and use only Sprockets; or you can choose to remove Sprockets use only Webpacker to bundle all your assets.

## Awkward?

When it comes to handling non-JavaScript assets, one reason to call webpack's approach to awkward is as follows:

**webpack wants to treat everything as a JavaScript module**

You would `import` JavaScript modules to include them in your application. To bundle CSS and images in webpack, you would also import CSS and image files from within your JavaScript application.

```js
import '../application.css'

import myImageUrl from '../images/my-image.jpg'
```

Importing CSS and images in JavaScript isn't for everyone.

:::note
Since Webpacker 5, importing CSS from a JavaScript file is no longer required. The more recent versions of Webpacker allow developers to create CSS entry points similarly to how you would in Sprockets.
:::

Resources

https://rossta.net/blog/why-does-rails-install-both-webpacker-and-sprockets.html
