
# WeVoting

A voting APP.


## Setup

+ Install node.js
  ```
  brew install node
  ```


+ Clone this project
	```
	git clone https://github.com/MingweiChen/voting.git
	cd voting
	```
+ Install local dependencies
	```
	npm install
	```

## Startup

### Development mode

For *nix (including Mac),

Run `./start.sh`


<!-- ## Build

Run `npm run build` -->


## Techstack overview

#### Server:

+ Enviroment: Node
+ Framework: [Express](http://expressjs.com/)
+ Tools: Request, compression, body-praser
+ Template engine: Ejs
+ DataBase: [Mongodb](https://www.mongodb.com/)

#### Front-end:

+ JS standard: ECMAScript 6
+ Framework: React + ReactDOM + React-Router
+ Module bundler and compiler: Webpack + Babel
+ Open source components: [react-d3-components](https://github.com/codesuki/react-d3-components)


## Directories

```
|-- client // front-end code
  |-- components // front-end components
    |-- footer.jsx // public footer
    |-- header.jsx // public header
    |-- loading.jsx // loading amination
    |-- spning.jsx // spning amination
  |-- lib // front-end library
    |-- utils.jsx
  |-- detail.jsx // detail page
  |-- home.jsx // home page
  |-- index.jsx // front-end intrance
  |-- list.jsx  // list page
  |-- new.jsx // new page
|-- controller // server-end controller
  |-- routes
    |-- login.js // login routes
    |-- view.js // view routes
  |-- api.js // api controller
  |-- DBhandler.js // DataBase CRUD
|-- dist // compiled front-end code
  |-- vendor
    |-- jquery.min.js
    |-- bootstrap.min.js
    |-- bootstrap.min.css
    |-- react-dom.min.js // react-dom production version
    |-- react.min.js // react production version
  |-- loading.css
  |-- vote.bundle.js // bundled voteApp intrance file
  |-- router.bundle.js // bundled react-router
  |-- detail.chunk.js // splitted JS file in detail page
  |-- home.chunk.js // splitted JS file in home page
  |-- list.chunk.js // splitted JS file in list page
  |-- new.chunk.js // splitted JS file in new page
|-- views // server-end views
  |-- error.ejs
  |-- footer.ejs
  |-- header.ejs
  |-- index.ejs
|-- .gitignore
|-- Procfile // heroku file
|-- README.md
|-- index.js // app intrance file
|-- package.json
|-- serverConfig.js // enviroment configuration
|-- start.sh // start file for mac
|-- webpack.config.js
```

## LICENSE

[MIT](https://mit-license.org/)
