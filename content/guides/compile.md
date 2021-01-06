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
