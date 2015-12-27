# Turo frontend coding exercise

This is a webapp made for the Turo frontend [coding exercise](https://github.com/relayrides/coding-exercise).
It is a single-page rental car search that uses [Hotwire’s Shopping API](http://developer.hotwire.com/docs/Rental_Car_Shopping_API).
It allows the user to:

* search by date and location
* view results in a list
* click on a result to view more details about the car

This app has been developed using my seed project [react-starter](https://github.com/tagoro9/react-starter)

## Features

* Material design.
* Search form validation.
* Handles server errors.
* Proxy calls to HotWire servers (e.g. for security or caching purposes).

## Stack

* Webpack
* ES2015 with Babel
* ESLint
* React
* Redux
* CSS Modules
* Live code updates

## Getting started

To run the development server just run:

    npm run dev
    
The rest of the commands available can be found in `package.json`:

* `start` Production build & run production server
* `build` for production builds
* `clean` is kinda obvious
* `lint` for code linting

Coverage reports are created with different formats under the `coverage` dir. 

Production build can be found in the `dist` folder.
