# Webpacker on Rails

1. Prelude

   - Who are you?
   - Why this book?
   - Why me?
   - What this book expects from you
   - What you'll get out of this book
   - Pre-requisites (ruby, node, rails, bundler, yarn)
   - What you like about Sprockets
   - What you don't like about Sprockets
   - What you want Webpacker to be
   - What you'll need to accept about webpack

2. Bird's Eye View

   - Sprockets vs Webpacker comparison
   - Key concepts
   - Survival tips, some examples

3. What you need to know

   1. Installation and upgrading is different

      - Gem + NPM package
      - Config files
      - bin/ executables

   1. Code organization looks different

      - Directory structure
      - Where the source files live
      - Specifying entry / output
      - Gotchas
        - Packs are only for entry points
        - Overpacking

   1. Writing your code will be different

      - Webpacker does NOT expose your code to the global scope by default
      - Understanding JavaScript modules
      - You may need to jump through hoops to use your jQuery plugins

   1. Requiring code works differently

      - How to require / import files
      - Understanding import/export syntax
      - How to "require tree" vs require.context
      - What's the difference between require and import?

   1. Shared code comes from NPM not Rubygems

      - NPM packages vs asset gems
      - node_modules directory
      - understanding package.json
      - Gotchas
        - switching branches
        - no imports from Rails asset gems
          - Webpacker does not handle Rails asset gems by default

   1. Compiling your code works differently

      - Webpack is built on Node not Ruby
      - Webpack comes with a development server
      - Sprockets: on demand
      - Webpacker: lots of flexibility
      - Compile via shell
        - on demand
        - up-front
      - Compile via dev-server:
        - up-front
        - in-memory, watch mode
        - live-reload
      - Where does output go
      - Deployment
        - asset:precompile
        - Heroku requirements
      - Gotchas
        - running integration tests with on demand compilation
        - dependencies vs devDependencies
      - Understanding output
      - Gotchas:
        - You can accidentally duplicate code if you don't know what you're doing

   1. Rendering code works differently

      - Compare view helpers
        - Attach JavaScript javascript_link_tag javascript_pack_tag
        - Attach CSS stylesheet_link_tag stylesheet_pack_tag
        - Link to an image image_url image_pack_tag
        - Link to an asset asset_url asset_pack_tag
        - Require a script //= require import or require
      - Locating assets: the Manifest

   1. Configuration looks different

      - Modest intro to webpack configuration
      - Modest intro to Webpacker configuration
      - Modifying the configuration

   1. Webpacker and Sprockets can both be used together

   1. Webpacker CAN bundle CSS

      - Extracting CSS

   1. Webpacker CAN bundle images

      - Specifying images for view helpers
      - Webpacker does not bundle images by default

   1. Webpack has special powers
      - can remove dead code
      - Webpack allows you to import code dynamically
      - Webpack can optimize your bundles for you
