# Framework Shop

### Project Summary

In this project we will be building an ecommerce shop for the sale of JavaScript libraries. Using React Router we'll set up and navigate between the various views required. Take some time to familiarize yourself with the provided components. 

* App will be the container component for our application
* Nav is the top navigation bar
* Landing will be the home page displayed when the application first loads
* Shop will be the main shop page, displaying the items available
* Details will be the view in which a user views a single product's information
* Cart will be the user's cart

Several of these have child components, used to display products in different ways.

### Setup

Get started with the usual steps: 

* Fork and clone this repository
* `cd` into the project directory
* `npm i` to download the included dependencies
* `npm test` to start the test suite
* `npm start` to spin up the development server

### Step 1

**Summary**

In step 1 we will be installing the required dependencies, configuring the router, and rendering our application through the router.

**Instructions**

* Install React Router
* Create a new file in `src/` named `router.js`
* Configure a router in the new file
* Render the router in `src/index.js`

**Detailed Instructions**

Start out by running `npm i react-router --save` to install and save React Router to the `package.json`.  Once that installs, create a new file in `src/` named `router.js`. This file will be where we create and configure our router.

In `src/router.js` we need to import the following

* `React` from React - Because we will be using JSX to declare our routes, React must be defined in the file.
* From React Router we'll need
	* `browserHistory` - The router will need to know which [history option](https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md) we want to use. `browserHistory` is the native History API built into the browser.
	* `IndexRoute` - This is a special type of route, used to make sure that child routes are rendered on a base path (i.e `/`)
	* `Route` - The default component used for defining a new route
	* `Router` - The base component that will be containing all of our route configuration
* Several of the provided project components will serve as an individual view/route. We'll need the following
	* `App` from `src/components/App.js`
	* `Cart` from `src/components/Cart/Cart.js`
	* `Details` from `src/components/Details/Details.js`
	* `Landing` from `src/components/Landing/Landing.js`
	* `Shop` from `src/components/Shop/Shop.js`



## Contributions

### Contributions

#### 
 
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

### Copyright

#### 

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
