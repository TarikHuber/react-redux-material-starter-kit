# Deprecated!!!

Please go to the new version writen from scratch [React Most Wanted](https://github.com/TarikHuber/react-most-wanted).

# react-redux-material-starter-kit

This starter kit is designet to give a high start up base for react projects. It uses Redux as the state container. It provides the most common features that you need for the run on a new application, like: navigation and routing, internationalisation, theme design and configuration, responsive design etc... The style is focused on [Google's Material Design](https://www.google.com/design/spec/material-design/introduction.html). 

The primary goal of the project is to be a showcase of how things can be solwed and not how they should or must be solwed. Marking Issues, commenting the structure or whole concept and making contributions are very welcome :)

## Table of Contents
1. [Demo](#demo)
1. [Features](#features)
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Development](#development)
    1. [Developer Tools](#developer-tools)
    1. [Run in dev mode](#run-in-dev-mode)
1. [Production](#production)
1. [Credits](#credits)
1. [TODO](#todo)
1. [Sources used](#sources-used)
1. [Credits](#credits)
1. [Thank You](#thank-you)

## Demo

Try out the demo application [here](https://www.smartscan.systems/app/).

![alt text](https://raw.githubusercontent.com/TarikHuber/react-redux-material-starter-kit/master/demo.png "Demo")

## Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [redux-persist](https://github.com/rt2zz/redux-persist) - used to save and restore the store in localStorage
* [material-ui](https://github.com/callemall/material-ui) - used to achive the material ui style
* [react-grid-layout](https://github.com/STRML/react-grid-layout) - used to create a grid list witch items can be moved and resised (dashborad)
* [react-intl](https://github.com/yahoo/react-intl) - used for the internationalisation
* [react-responsive](https://github.com/contra/react-responsive) - used to create the responsive design
* [redux-title](https://github.com/DJCordhose/redux-title) - used to manipulate the page title
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)


## Getting Started

Clone or download the project from the repository. 

```
git clone https://github.com/TarikHuber/react-redux-material-starter-kit

//or in a specific folder (change my_folter to the folder you want to clone the project
git clone https://github.com/TarikHuber/react-redux-material-starter-kit my_folder
```

### Install dependencies, and run in dev mode

```
$ npm install                   # Install project dependencies - we need this only the first time the application is started
$ npm run dev                   # Compile and launch in dev mode
```
If everithing is fine you should see a message like this:
```
==> ??  Listening on port 3500. Open up http://localhost:3500/ in your browser.
```
If that is the case you can the application in `http://localhost:3500`.

## Application Structure
 
```
.
├── node_modules             # Application dependecies
├── src                      # Application source code
│   ├── actions              # Application actions
│   ├── components           # Reusable Presentational Components
│   ├── containers           # Reusable Container Components
│   ├── reducers             # Application redux reducers
│   ├── store                # Application store creation files
│   ├── themes               # Available and custom themes of the application
│   ├── translations         # Available languages for the application
│   ├── utils                # Tools used in application that don't fit in any other structure folder
│   ├── config.js            # Application config data like application name
│   ├── index.js             # Application entry point
│   └── routes.js            # Application routes definition
└── static                   # Static assets
├── webpack.config.js        # Webpack settings
├── server.js                # Server application entry point
├── index.html               # Main HTML page container for app
```

## Development

#### Developer Tools

The recommendet DevTools are already immplemented in the project but disabled in dev and prod. To use them in dev mode go to `src/containers/Root/Root.dev.js` and change the code

```
<Provider store={store} >
			<ConnectedIntlProvider>
				<div>		 
					<Router history={browserHistory} routes={routes} />
				</div>
			</ConnectedIntlProvider>
		</Provider>	
```
to:
```
<Provider store={store} >
			<ConnectedIntlProvider>
				<div>		 
					<Router history={browserHistory} routes={routes} />
					<DevTools/>	
				</div>
			</ConnectedIntlProvider>
		</Provider>	
```

This will add the `DevTools` element to the project. To hide the DevTools in the application just press `CNTRL+H` and again to make them visible.

#### Run in dev mode

To run the application in dev mode we use the same command as mentioned in the [Getting Started](#getting-started) part. But without the "npm install"

```
$ npm run dev                   # Compile and launch in dev mode
```
The application shoul now be available at http://localhost:3500.


## Production

To run the application in production we use the following command:

```
npm start
```

This will make the application available at the port 80.
Just open http://localhost to view the application in production mode. 

Consider that this command will be stoped if your session on the linux server is stoped. To run the applicastion in prod mode event if the session is closed you can use this command:

```
npm start &
```

## TODO

- [x] Refactor coce to remove the warnings of the new React version
- [ ] Implement the internationalisation in the whole project
- [ ] Refactor code to use best practices 
- [ ] Add testing


## Sources used

* [cloudmu/react-redux-starter-kit](https://github.com/cloudmu/react-redux-starter-kit)
* [davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)
* [Material-UI](http://www.material-ui.com/#/)
* [STRML/react-grid-layout](https://github.com/STRML/react-grid-layout)

## Credits

Starting with react and redux is not a easy task. I was searching for the best tools and practices for developing a application that has features like material ui, responsive design, sliding menu etc... There are lots of greate starter kits on the web. Some of the examples in this project are direct copies or modified examples from those starter kids. So I would like to thank all of those making greate starter kids. Having that in mind I'm sharing my starter kid witch I will use in future for creating new projects and I hope that it can help other to master react and redux.

## Thank You

I would like to thank:
* [Dan Abramov](https://github.com/gaearon) for Redux :)
* [David Zukowski](https://github.com/davezuko) for his starter kit 
* [Yunjun Mu](https://github.com/cloudmu) for his starter kit that helped me alot
* the [Call-Em-All](https://github.com/callemall) for the Material UI
* and those making the greate tehnologies and project that help use make our programming life easier :)

I hope that this starter kit can help others to use and understant react, redux and all the other greate tehnologies like the projects abow helped me.
