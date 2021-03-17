---
title: How did we get here?
description: A brief history of asset bundling in Rails and across the JavaScript ecosystem
---

If you've used Rails for long enough, it would be reasonable to expect adopting Webpacker in your Rails app would be a seamless experience. Drop your assets in a folder, add a few dependencies, and everything "just works." This is what we've come to expect from the Rails asset pipeline on top of Sprockets for nearly ten years since it was [introduced in Rails 3.1 on August 31, 2011](https://weblog.rubyonrails.org/2011/8/31/rails-3-1-0-has-been-released/).

Since that time, the popularity of JavaScript exploded, arguably fueled by node.js, which made it easier to run JavaScript on a server. node.js introduced many JavaScript developers to the concept of "modules", namely [CommonJS](http://www.commonjs.org/).

## CommonJS modules

You may be familiar with CommonJS-style modules in which files define references to export with statements like `module.exports = {...}` and import dependences from other files with statements like `const webpack = require('webpack')`.

```js
const $ = require('jquery')
const _ = require('lodash')

function myFunction() {}

module.exports = myFunction
```

## AMD

Another specification, known as Asynchronous Module Definition, or AMD, was created to allow modules to be resolved asynchronously. This approach was aimed at browser environments which must deal with latency as resources are downloaded from remote servers. AMD modules might look like the following example:

```js
define(['jquery', 'lodash'], function ($, _) {
  function myFunction() {}

  return myFunction
})
```

## UMD

JavaScript library authors now will often publish packages in a wrapped distribution that is compatible with CommonJS, AMD, or no module specification at all. This is known as the Universal Module Definition (UMD). The wrapper is typically an Immediately-Invoked Function Expression (IIFE) that might look like the example below:

```js
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery', 'lodash'], factory)
  } else if (typeof exports === 'object') {
    // Node, CommonJS-like
    module.exports = factory(require('jquery'), require('lodash'))
  } else {
    // Browser globals (root is window)
    root.myFunc = factory(root.jQuery, root._)
  }
})(this, function ($, _) {
  // methods
  function myFunction() {}

  // export
  return myFunction
})
```

## ES Modules

:::note
TODO
:::

## Asset Bundlers

:::note
TODO
:::

## Rails Today

:::note
TODO
:::

### Resources

- [JavaScript modules - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Why AMD? - requirejs.org](https://requirejs.org/docs/whyamd.html)
- [CommonJS Notes - requirejs.org](https://requirejs.org/docs/commonjs.html)
- [Understanding (all) JavaScript module formats and tools - Dixon's Blog](https://weblogs.asp.net/dixin/understanding-all-javascript-module-formats-and-tools#umd-module-universal-module-definition-or-umdjs-module)
