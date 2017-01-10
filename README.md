# Feel Good About Yourself v2

Live Demo: //fill this out later

## Jump start

### Working on the project

* Move into the project directory: `cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME`
* Run the database: `sudo mongod`
* Run the development task: `npm run dev`
    * Starts a server running at http://localhost:8080
    * Automatically rebuilds when any of your files change

## Directory layout

```
.
├── client      Client-side code
│   ├── assets  Images, videos, etc.
│   ├── js      JavaScript
│   └── scss    SASS stylesheets
├── server      Server-side code
└── test        Tests
    ├── client  Client tests
    └── server  Server tests
```

## Deployment

Requires the [Heroku CLI client](https://devcenter.heroku.com/articles/heroku-command-line).

### Setting up the project on Heroku

* Move into the project directory: `cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME`
* Create the Heroku app: `heroku create PROJECT_NAME`
* Instruct Heroku to install the development dependencies: `heroku config:set NPM_CONFIG_PRODUCTION=false`

### Deploying to Heroku

* Push your code to Heroku: `git push heroku master`

## Continuous Integration

* Add your repository to [Travis CI](https://travis-ci.org/)

## Continuous Deployment

Requires the [Travis CLI client](https://github.com/travis-ci/travis.rb).

### Setting up CD

* Add the following configuration to `.travis.yml`:

    ```
    deploy:
      provider: heroku
      app: YOUR_HEROKU_APP_NAME
    ```
* Add your Heroku API key: `travis encrypt $(heroku auth:token) --add deploy.api_key`

### Deploying using CD

* Push your code to GitHub: `git push origin master`

