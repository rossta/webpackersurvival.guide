# Compilation

## Compilation works differently

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

Running `./bin/webpack` is similar to typing out one the following commands to run `webpack` directly, depending on your current `RAILS_ENV`:

```sh
RAILS_ENV=development yarn webpack --config ./config/webpack/development.js
RAILS_ENV=test yarn webpack --config ./config/webpack/test.js
RAILS_ENV=production yarn webpack --config ./config/webpack/production.js
```
