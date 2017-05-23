<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

<img src="https://github.com/DevMountain/framework-shop/blob/master/readme-assets/landing.png" />

In this project we will be building an ecommerce shop for the sale of JavaScript libraries. Using React Router we'll set up and navigate between the various views required. Take some time to familiarize yourself with the provided components:

* `App` will be the top level component for our application.
* `Nav` will be the top navigation bar.
* `Landing` will be the home page displayed when the application first loads.
* `Shop` will be the main shop page, displaying the items available.
* `Details` will be the view in which a user views a single product's information.
* `Cart` will be the user's cart.

Several of these have child components that are used to display products in different ways.

Redux has also been mostly wired up to the application. Take a quick look over the reducer to get an idea of how the application data looks.

## Setup

* `Fork` and `clone` this repository.
* `cd` into the project directory.
* Run `npm i` to download the included dependencies.
* Run `npm test` to start the test suite.
* Run `npm start` to spin up the development server.

## Step 1

### Summary

To begin our project, we will be installing the required dependencies and configuring the router.

### Instructions

* Install React Router.
* Create a new file in `src/` named `router.js`.
* Configure a router in `src/router.js`: 
  * Import `Switch` and `Route` from `react-router-dom`.
  * Import the following components to use as routes:
    * `src/components/Landing/Landing.js`
    * `src/components/Shop/Shop.js`
    * `src/components/Details/Details.js`
    * `src/components/Cart/Cart.js`
  * Use the following combinations of paths and components for your router:
    * Path: "/" - Component: `Landing` - This path should be exact.
    * Path: "/shop" - Component: `Shop`.
    * Path: "/details/:name" - Component: `Details`.
    * Path: "/cart" - Component: `Cart`

<details>

<summary> Detailed Instructions </summary>

<br />

To begin, run `npm i react-router-dom --save` to install and save React Router to the `package.json`. Once that installs, create a new file in `src/` named `router.js`. This file will be where we create and configure our router. To begin creating our router we'll need to import `React` from React ince we will be using JSX to declare our routes.

```js
import React from 'react';
```

The next thing we'll need to import is `react-router-dom`. We'll need `Route` and `Switch` from `react-router-dom`. `Route` is the default component used for defining a new route. `Switch` is a component for determining which route to display.

```js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
```

We'll also need to import the components that will server as an individual view/router. The components we'll want are: `Cart`, `Details`, `Landing`, and `Shop`.

```js
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Landing from './components/Landing/Landing';
import Shop from './components/Shop/Shop';
```

Now that we have all our imports we can focus on creating the router. We can do this by exporting JSX. The top level element will be our `Switch` component from `react-router-dom`. Create an export default statement underneathe all the `import` statements.

```js
export default (
  <Switch>

  </Switch>
)
```

We can then add our views/routes inside the `Switch` component by using the `Route` component from `react-router-dom`. For example, if I wanted to render the `Landing` component it would look like:

```js
export default (
  <Switch>
    <Route component={ Landing } exact path="/" />
  </Switch>
)
```

The code snippet above means that when the path of our browser is at "/" on our website it will render the `Landing` component.

What is `exact`? Exact allows us to specific in React Router v4 that we only want that component to render when the path is exactly "/". If we had a development server running on port 3000, that would mean the landing component would only render at: `http://localhost:3000/`.

Let's add the reset of our views/routes. Don't worry about using `exact` on these routes. The remaining components to render are: `Cart`, `Details`, and `Shop`.

```js
export default (
  <Switch>
    <Route component={ Landing } exact path="/" />
    <Route component={ Shop } path="/shop" />
    <Route component={ Details } path="/details/:name" />
    <Route component={ Cart } path="/cart" />
  </Switch>
)
```

The code snippet above translates to:
  * Say the server is hosted locally on port 3000.
  * A user goes to `http://localhost:3000/` in their browser -> The `Landing` component will render.
  * A user goes to `http://localhost:3000/shop` in their browser -> The `Shop` component will render.
  * A user goes to `http://localhost:3000/details/someNameGoesHere` in their browser -> The `Details` component will render.
  * A user goes to `http://localhost:3000/cart` in their browser -> The `Cart` component will render.

</details>

### Solution

<details>

<summary> <code> src/router.js </code> </summary>

```jsx
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Landing from './components/Landing/Landing';
import Shop from './components/Shop/Shop';

export default (
  <Switch>
    <Route component={ Landing } exact path="/" />
    <Route component={ Shop } path="/shop" />
    <Route component={ Details } path="/details/:name" />
    <Route component={ Cart } path="/cart" />
  </Switch>
)
```

</details>

## Step 2

### Summary

In this step, we will take the router we just configured in `src/router.js` and add it to our application in `src/index.js`.

### Instructions

* Open `src/index.js`.
* Import `BrowserRouter` from `react-router-dom`.
* Wrap the `Provider` component in a `BrowserRouter` component.
* Open `src/components/App.js`.
* Import `router` from `src/router.js`.
* Underneath the `Nav` component render the `router` JSX.

<details>

<summary> Detailed Instructions </summary>

<br />

Now that our router is configured in `src/router.js`, we need to wrap our application in a `BrowserRouter` component to make use of those routes. Open up `src/index.js` and import `BrowserRouter` from `react-router-dom`. Then inside of `ReactDOM.render` wrap the `Provider` component in a `BrowserRouter` component.

```jsx
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById( "root" )
);
```

All that is left is actually rendering our router's JSX. Let's open `src/components/App.js`. Import `router` from `src/router.js` and render it just beneath `<Nav />`. Because we are rendering the `router` inside of `App`, that means `App` will always be visible! This is useful, because we want to display the top navigation bar on every page, and now we only have to render it once.

```jsx
import router from '../router';

export function App( { children } ) {
  return (
    <div className="app">
      <Nav />
      { router }
    </div>
  );
}
```

</details>

### Solution

You should now see the `Landing` component by default, and have the ability to navigate to different routes via the address bar. Try manually visiting all the different routes and make sure they are working.

<details>

<summary> <code> src/index.js </code> </summary>

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import store from "./store";

import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById( "root" )
);
```

</details>

<details>

<summary> <code> src/components/App.js </code> </summary>

```jsx
import React from "react";

import "./App.css";

import Nav from "./Nav/Nav";
import router from '../router';

export function App( { children } ) {
  return (
    <div className="app">
      <Nav />
      { router }
    </div>
  );
}

export default App;
```

</details>

<br />

<img src="https://github.com/DevMountain/framework-shop/blob/solution/readme-assets/1g.gif" />

## Step 3

### Summary

In this step, we will be setting up the `Landing` component to display data and link to other views.

### Instructions

* Open `src/components/Landing/Landing.js`.
* Import `FeaturedProduct` from `src/components/Landing/FeaturedProduct/FeaturedProduct.js`.
* Import `Link` from `react-router-dom`.
* Modify the `h1` for "Take me to the full shop!":
  * This element should be wrapped in a `Link` element.
  * The `Link` element should have a prop called `to` that equals `"/shop"`.
  * The `Link` element should have a `className` prop that equals `"landing__full-shop-link"`.
* Before the `return` statement of the `Landing` function:
  * Create a variable called `products` that equals a mapping over `featuredProducts`.
  * The map should have one parameter called `product`.
  * The map should return the following `JSX` for each `product`:
    * <details>

      <summary> <code> JSX </code> </summary>

      ```jsx
      <FeaturedProduct
        addToCart={ () => addToCart( product.id ) }
        description={ product.description }
        key={ product.id }
        logo={ product.logo }
        name={ product.name }
        onSale={ product.onSale }
        price={ product.price }
      />
      ```

      </details>
* Render `products` inside the `div` with the `className` of `landing__products-wrapper`.
* Open `src/components/Landing/FeaturedProduct/FeaturedProduct.js`.
* Import `Link` from `react-router-dom`.
* Update all the comments with the appropriate prop.
* Modify the `h3` element with the `className` of `featured-produce__name`:
  * This element should be wrapped in a `Link` element.
  * The `Link` element should have a `to` prop that equals ``` { `details/${name}` } ```.
* Modify the `p` element with the `className` of `featured-product__price-reduced`:
  * This element should be inside a `ternary statement`.
  * If `onSale` is truthy, render the `p` element.
  * If `onSale` is not truthy, use `null`.

<details>

<summary> Detailed Instructions </summary>

<br />

So we have routes now but no way to get to those routes from the interface. Let's fix that by updating our `Landing` component. Open `src/components/Landing/Landing.js`. Before we make any changes, take a look at the provided `mapStateToProps` and `connect`. This component will take a `products` prop that is an array of of products that are either featured or on sale. We are also passing the `addToCart` action creator to allow for dispatching a new product to a users cart.

Let's begin by importing `FeaturedProduct` from `src/components/Landing/FeaturedProduct/FeaturedProduct.js` and `Link` from `react-router-dom` in `src/components/Landing/Landing.js`. The `Link` component is React Router's replacement for an `<a>` tag which is used to allow the library better control over routing. 

```js
import { Link } from "react-router-dom";
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
```

Near the bottom of the `return`, wrap the `h1` with the `className` of `landing__full-shop-link` in a `Link`. `Link` will take one prop called `to` that should equal `"/shop"`.

```js
<Link className="landing__full-shop-link" to="/shop">
  <h1 className="landing__full-shop-link">Take me to the full shop!</h1>
</Link>
```

Our `h1` element on the `Landing` component will now route to the `Shop` component when clicked on.

Now let's work on getting products to actually show up. At the top of the `Landing` function create a new variable called `products`. This should equal the result of mapping over `featuredProducts` and returning the following JSX:

```jsx
<FeaturedProduct
  addToCart={ () => addToCart( product.id ) }
  description={ product.description }
  key={ product.id }
  logo={ product.logo }
  name={ product.name }
  onSale={ product.onSale }
  price={ product.price }
/>
```

When combining the JSX with the map function it'll look like:

```js
const products = featuredProducts.map( (product) => (
  <FeaturedProduct
    addToCart={ () => addToCart( product.id ) }
    description={ product.description }
    key={ product.id }
    logo={ product.logo }
    name={ product.name }
    onSale={ product.onSale }
    price={ product.price }
  />
)); 
```

This will create an array of React components for us. More specifically an array of `FeaturedProduct` components. Since we used a map, each featured product will have all the information related to that product. 

We are now ready to render our products onto the landing page. Locate the `div` with the `className` of `landing__products-wrapper`. Inside that `div` render our `products`.

```jsx
<div className="landing__products-wrapper">
  { products }
</div>
```

The products should now be rendering on the page. However, the data is not being populated into the `FeaturedProduct` component. Let's take a look at the `FeaturedProduct.js` file and make sure it's using the props as the data source. Open up `src/components/Landing/FeaturedProduct/FeaturedProduct.js` and import `Link` from React Router. 

```js
import { Link } from "react-router-dom";
```

Now let's replace the commented our sections with the appropriate props. If you notice our props have been destructured using es6. We can tell this happening based on the code snippet below:

```js
export default function FeaturedProduct( { addToCart, description, logo, name, onSale, price } ) {
```

Now we can reference each prop inside this function as `addToCart`, `description`, `logo`, `name`, `onSale`, and `price`. After updating all the commented out sections, our `return` should look like:

```jsx
return (
  <div className="featured-product">
    <div className="featured-product__logo-name-wrapper">
      <img
        alt={ `${ name } logo` }
        className="featured-product__logo"
        src={ logo }
      />
      <h3 className="featured-product__name">{ name }</h3>
    </div>
    <p className="featured-product__description">{ description }</p>
    <div className="featured-product__buy-wrapper">
      <p className="featured-product__price-reduced">Price Reduced!</p>
      <button
        className="featured-product__buy"
        onClick={ addToCart }
      >
        ${ price }
      </button>
    </div>
  </div>
);
```

If we take a look at our live-server ( Live server not running? Run `npm start` when in the root of the project. ) we can see that our landing page is now displaying the correct data for each product. However, it looks like all the prices are reduced and we can't click on the product to go to the details page. Let's fix this. Wrap the `h3` tag that holds the product name in a `Link` component with a `to` prop that equals ``` { `details/${name}` } ```.

```jsx
return (
  <div className="featured-product">
    <div className="featured-product__logo-name-wrapper">
      <img
        alt={ `${ name } logo` }
        className="featured-product__logo"
        src={ logo }
      />
      <Link to={ `/details/${ name }` }>
        <h3 className="featured-product__name">{ name }</h3>
      </Link>
    </div>
    <p className="featured-product__description">{ description }</p>
    <div className="featured-product__buy-wrapper">
      <p className="featured-product__price-reduced">Price Reduced!</p>
      <button
        className="featured-product__buy"
        onClick={ addToCart }
      >
        ${ price }
      </button>
    </div>
  </div>
);
```

Now each product will have a link to its own details page. All that's left now is fixing the "Price Reduced!" label to not display for every product. Let's use a `ternary statement` to only display that `p` element when `onSale` is truthy. Otherwise just use `null`.

```jsx
return (
  <div className="featured-product">
    <div className="featured-product__logo-name-wrapper">
      <img
        alt={ `${ name } logo` }
        className="featured-product__logo"
        src={ logo }
      />
      <Link to={ `/details/${ name }` }>
        <h3 className="featured-product__name">{ name }</h3>
      </Link>
    </div>
    <p className="featured-product__description">{ description }</p>
    <div className="featured-product__buy-wrapper">
      {
        onSale
        ?
          <p className="featured-product__price-reduced">Price Reduced!</p>
        :
          null
      }
      <button
        className="featured-product__buy"
        onClick={ addToCart }
      >
        ${ price }
      </button>
    </div>
  </div>
);
```

</details>

### Solution

<details>

<summary> <code> src/components/Landing/Landing.js </code> </summary>

```jsx
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Landing.css";

import { addToCart } from "../../ducks/product";

import FeaturedProduct from './FeaturedProduct/FeaturedProduct';

export function Landing( { addToCart, featuredProducts } ) {
  const products = featuredProducts.map( (product) => (
    <FeaturedProduct
      addToCart={ () => addToCart( product.id ) }
      description={ product.description }
      key={ product.id }
      logo={ product.logo }
      name={ product.name }
      onSale={ product.onSale }
      price={ product.price }
    />
  ));

  return (
    <main className="landing">
      <h1>Featured Products</h1>
      <div className="landing__products-wrapper">
        { products }
      </div>

      <Link className="landing__full-shop-link" to="/shop">
        <h1 className="landing__full-shop-link">Take me to the full shop!</h1>
      </Link>
    </main>
  );
}

function mapStateToProps( { products } ) {
  return { featuredProducts: products.filter( product => product.featured || product.onSale ) };
}

export default connect( mapStateToProps, { addToCart } )( Landing );
```

</details>

<details>

<summary> <code> src/components/Landing/FeaturedProduct/FeaturedProduct.js </code> </summary>

```jsx
import React, { PropTypes } from "react";
import { Link } from "react-router-dom";

import "./FeaturedProduct.css";

export default function FeaturedProduct( { addToCart, description, logo, name, onSale, price } ) {
  return (
    <div className="featured-product">
      <div className="featured-product__logo-name-wrapper">
        <img
          alt={ `${ name } logo` }
          className="featured-product__logo"
          src={ logo }
        />
        <Link to={ `/details/${ name }` }>
          <h3 className="featured-product__name">{ name }</h3>
        </Link>
      </div>
      <p className="featured-product__description">{ description }</p>
      <div className="featured-product__buy-wrapper">
        {
          onSale
          ?
            <p className="featured-product__price-reduced">Price Reduced!</p>
          :
            null
        }
        <button
          className="featured-product__buy"
          onClick={ addToCart }
        >
          ${ price }
        </button>
      </div>
    </div>
  );
}

FeaturedProduct.propTypes = {
  addToCart: PropTypes.func.isRequired
  , description: PropTypes.string.isRequired
  , logo: PropTypes.string.isRequired
  , name: PropTypes.string.isRequired
  , onSale: PropTypes.bool
  , price: PropTypes.number.isRequired
};

FeaturedProduct.defaultProps = { onSale: false };
```

</details>

<br />

<img src="https://github.com/DevMountain/framework-shop/blob/solution/readme-assets/1.png" />

The links should now be setup to go the `details` route. However, the component is intentionally broken. We will fix this in the next step. If your view looks like the picture above, you are good to go!

## Step 4

### Summary

In this step, we will set up the `Details` component. We'll make use of route parameters to display the correct product data. I'll go into more detailed instructions on route paramters in the detail instructions section of this step.

### Instructions

* Open `src/components/Details/Details.js`.
* Import `Link` from `react-router-dom`.
* Update the `h3` element to link to the `Shop` component.
* Modify `mapStateToProps`:
  * Using the `ownProps` parameter, return the single product object based on the route.
    * Hint: Add a `console.log` in `mapStateToProps` that logs `ownProps`. Then go into the interface and click on a route from the landing page. If you open the browser's developer tools, you should see `ownProps` get logged. Look around this object for any useful property that can indicate what product we need to display information for.
  * Once you have that property value from `ownProps` use it in combination with a `find` method to return a single object.
    * Hint: Use `find` on `state.products`. Return the product whose `name` is equal to the `name` in our route.
* Use the `product` object that gets passed in as a paramter to the `Details` function to update all the commented out sections to the correct property value.
  * Hint: Add a `console.log` just above the `const` in the `Details` function of the value of `product`. Then go into the interface and click on a route from the landing page. If you open the browser's developer tools, you should see a log that shows an object. If you don't see an object, your `.find` is working incorrectly in `mapStateToProps`.
* Create an `addToCartAndRedirect` function above the `return` of the `Details` function:
  * The `buy` button should be modified to use this new function instead.
  * This function should call the `addToCart` action creator and pass in `id` as a parameter.
  * This function should then `route` the user back to the previous page the user was on.
    * Hint: React Router is providing us with a `history` object which we can reference as `history`. This object contains values and methods that we can use to controll our router programmatically. Try to figure out the most efficient way to go back a page.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `src/components/Details/Details.js`. Currently this view is broken and will throw errors if we try to navigate to it. This is because our `mapStateToProps` function is returning all of our application state instead of the specific product we need.

To fix this we'll need to get access to our route parameters in `mapStateToProps`. Luckily connect passes a second parameter to `mapStateToProps`. This second parameter is an object that contains all the other connected `props` the component has. When diving into this object we'll see it has a `match` property that gets added from `react-router`. This is also equal to an object. If we take a look at that object we'll see it has a property called `params` that is also equal to an object. This `params` object contains all the params in our URL. 

When we created our route for details we specified we wanted a parameter called `name`. Because of this if we take a look at `ownProps.match.params` we'll see a property called `name` that equals a string. Since our landing page has three products this name will come in three different forms. Not including all the other things that are on the `ownProps` object, you will see `ownProps` come in these forms:

```js
// Backbone
ownProps = {
  match: {
    params: {
      name: 'Backbone'
    }
  }
}
// React
ownProps = {
  match: {
    parmas: {
      name: 'React'
    }
  }
}
// Vue
ownProps = {
  match: {
    params: {
      name: 'Vue'
    }
  }
}
``` 

Knowing this object structure we can combine the value of `ownProps.match.params.name` with a `.find` to get the exact product object we need for our component. In the `mapStateToProps` function let's modify the original return of just `state` to return a new object.

```js
function mapStateToProps( state, ownProps ) {
  return { };
}
```

On `state` there is a property called `products` that is an array that contains all the `product` objects. Let's use a `.find` on that array to return the object whose `name` property equals the name property on `ownProps.match.params.name`.

```js
function mapStateToProps( state, ownProps ) {
  return { product: state.products.find( product => product.name === ownProps.match.params.name ) };
}
```

Now that the component has access to the proper product object we can fill in the commented out sections with the correct data. Since I deconstructed the product object for you, we can look at that to determine what properties are on the `product` object. The product object will have a `description`, `id`, `logo`, `name`, and `price`. Let's add these values to the commented out sections.

```jsx
return (
  <div className="details">
    <h3 className="details__back-to-shop">Back to shop</h3>
    <img
      alt={ name }
      className="details__logo"
      src={ logo }
    />
  <h1 className="details__name">{ name }</h1>
    <p className="details__description">{ description }</p>
    <button
      className="details__buy"
      onClick={ addToCart( id ) }
    >
      Buy now for ${ price }!
    </button>
  </div>
);
```

Now when we visit the details of any of the featured products we should see it's data populate the page. Let's focus on the functionality of the component now that we have the data we need. If we take a look at our `h3` element we'll notice it needs to be a link back to the `Shop` component. Let's import `Link` from `react-router-dom` and wrap the `h3` in a `Link` that has a prop called `to` that equals `"/shop"`.

```jsx
import { Link } from "react-router-dom";

<Link to="/shop">
  <h3 className="details__back-to-shop">Back to shop</h3>
</Link>
```

A user will now be able to navigate back to the store if they are not interested in the presented product. All that's left is to make our `Buy` button functional by adding the product to the cart and then routing the user back to the previous page they were on. If we take a look at our `Details` function it looks like it is taking in a `history` parameter. This is also something `react-router` is adding to our application. This object represents the `window.History` api. On this `history` object that gets passed in for us, we can see that it has a function called `goBack`. We can call that function after dispatching our `addToCart` action.

```js
function addToCartAndRedirect() {
  addToCart( id );
  history.goBack();
}
```

Don't forget to update the JSX to call this new function instead of the `addToCart` action creator.

```jsx
<button
  className="details__buy"
  onClick={ addToCartAndRedirect }
>
  Buy now for ${ price }!
</button>
```

</details>

### Solution

<details>

<summary><code>src/components/Details/Details.js</code></summary>

```jsx
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Details.css"

import { addToCart } from "../../ducks/product";

export function Details( { addToCart, history, product } ) {
  const {
    description,
    id,
    logo,
    name,
    price,  
  } = product;

  function addToCartAndRedirect() {
    addToCart( id );
    history.goBack();
  }

  return (
    <div className="details">
      <Link to="/shop">
        <h3 className="details__back-to-shop">Back to shop</h3>
      </Link>
      <img
        alt={ name }
        className="details__logo"
        src={ logo }
      />
    <h1 className="details__name">{ name }</h1>
      <p className="details__description">{ description }</p>
      <button
        className="details__buy"
        onClick={ addToCartAndRedirect }
      >
        Buy now for ${ price }!
      </button>
    </div>
  );
}

function mapStateToProps( state, ownProps ) {
  return { product: state.products.find( product => product.name === ownProps.match.params.name ) };
}

export default connect( mapStateToProps, { addToCart } )( Details );
```

</details>

<br />

<img src="https://github.com/DevMountain/framework-shop/blob/solution/readme-assets/2g.gif" />

## Step 5

### Summary

In this step, we will set up the top navigation bar to display cart information and provide some links.

### Instructions

* Open `src/components/Nav/Nav.js`.
* Import `Link` from `react-router-dom`.
* Wrap the `div` with a `className` of `nav__header-wrapper` in a `Link` component:
  * The `Link` component should have a `to` prop that equals `"/"`.
* Wrap the `p` element with the `className` of `nav__cart` in a `Link` component:
  * The `Link` component should have a `to` prop that equals `"/cart"`.
  * Update the text of the `p` element to display `cartTotal`. This value comes from the `mapStateToProps` function below.

<details>

<summary> <code> src/components/Nav/Nav.js </code> </summary>

```jsx
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Nav.css";
import javascriptLogo from "../../assets/javascript.svg";

export function Nav( { cartTotal } ) {
  return (
    <nav className="nav">
      <Link to="/">
        <div className="nav__header-wrapper">
            <img
              alt="javascript logo"
              className="nav__javascript-logo"
              src={ javascriptLogo }
            />
            <h3 className="nav__header">
              The JavaScript Framework Shop
            </h3>
        </div>
      </Link>
      <Link to="/cart">
        <p className="nav__cart">Cart ( ${ cartTotal } )</p>
      </Link>
    </nav>
  );
}

function mapStateToProps( { products, productsInCart } ) {
  return {
    cartTotal: products
      .filter( product => productsInCart.includes( product.id ) )
      .reduce( ( total, { price } ) => total + price, 0 )
      .toFixed( 2 )
  };
}

export default connect( mapStateToProps )( Nav );
```

</details>

<br />

<img src="https://github.com/DevMountain/framework-shop/blob/solution/readme-assets/3g.gif" />

## Step 6

### Summary

In this step, we will set up the `Shop` view and its child components.

### Instructions

* Open `src/components/Shop/Shop.js`.
* Import `ProductTile` from `src/components/Shop/ProductTile/ProductTile.js`.
* Create a variable called `productTiles` above the `return` of the `Shop` function: 
  * This variable should equal a mapping over `products` that returns the following JSX:
    * <details>
      <summary> <code> JSX </code> </summary>

      ```jsx
      <ProductTile
        addToCart={ () => addToCart( product.id ) }
        key={ product.id }
        logo={ product.logo }
        name={ product.name }
        price={ product.price }
      />
      ```
      </details>
* Inside the `div` with the `className` of `"shop__products-wrapper"` render the `productTiles` variable.
* Open `src/components/Shop/ProductTile/ProductTile.js`.
* Update the commented out sections to use `props`.
* Wrap the `h3` element in a `Link` component:
  * The `Link` component should have a `to` prop that equals ``` { `details/${ name }` } ```.

<details>

<summary> Detailed Instructions </summary>

<br />

No detailed instructions for this step! This step is very similar to how we set up the `Landing` and `FeaturedProducts` components. Refer back to that to help.

</details>

### Solution

<details>

<summary> <code>src/components/Shop/Shop.js</code> </summary>

```jsx
import React from "react";
import { connect } from "react-redux";

import "./Shop.css";

import { addToCart } from "../../ducks/product";

import ProductTile from './ProductTile/ProductTile';

export function Shop( { addToCart, products } ) {
  const productTiles = products.map( (product) => (
    <ProductTile
      addToCart={ () => addToCart( product.id ) }
      key={ product.id }
      logo={ product.logo }
      name={ product.name }
      price={ product.price }
    />
  ));

  return (
    <div className="shop">
      <h1 className="shop__header">Shop</h1>
      <div className="shop__products-wrapper">
        { productTiles }
      </div>
    </div>
  );
}

function mapStateToProps( { products } ) {
  return { products };
}
export default connect( mapStateToProps, { addToCart } )( Shop );
```

</details>

<details>

<summary> <code> src/components/Shop/ProductTile/ProductTile.js </code> </summary>

```jsx
import React, { PropTypes } from "react";
import { Link } from "react-router-dom";

import "./ProductTile.css";

export default function ProductTile( { addToCart, logo, name, price } ) {
  return (
    <div className="product-tile">
      <section className="product-tile__info">
        <Link to={ `details/${ name }` }>
          <h3> { name } </h3>
        </Link>
        <button
          className="product-tile__buy"
          onClick={ addToCart }
        >
          ${ price }
        </button>
      </section>
      <section className="product-tile__logo-wrapper">
        <img
          className="product-tile__logo"
          alt={ `${ name } logo` }
          src={ logo }
        />
      </section>
    </div>
  );
}

ProductTile.propTypes = {
  addToCart: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
```

</details>

<br />

<img src="https://github.com/DevMountain/framework-shop/blob/solution/readme-assets/4g.gif" />

## Step 7

### Summary

In this step, we will allow users to checkout from the cart view. We will create a new component to thank them for their purchase.

### Instructions

* Create a folder in `src/components/` called `ThankYou`.
* Inside the `ThankYou` folder you just created, create a `ThankYou.js` file.
* Inside the `ThankYou` folder you just created, create a `ThankYou.css` file.
  * <details>
    <summary> <code> CSS </code> </summary>

    ```css
    .thank-you {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 25px;
    }
    ```
    </details>
* Create a basic react component called `ThankYou` in `src/components/ThankYou/ThankYou.js`:
  * Import `React` from `react`.
  * Import `./ThankYou.css`.
  * Import `thanks` from `src/assets/thanks.gif`.
  * The `ThankYou` component should return the following JSX:
    * <details>
      <summary> <code> JSX </code> </summary>

      ```jsx
      <div className="thank-you">
        <img
          role="presentation"
          src={ thanks }
        />
        <h3>Thank you for your purchase!</h3>
      </div>
      ```
      </details>
* Open `src/router.js`.
* Import the `ThankYou` from `src/components/ThankYou/ThankYou.js`.
* Create a new `route` where the `path` is `"/thank-you"` and the component is `ThankYou`.
* Open `src/components/Cart/Cart.js`.
* Create a function called `checkoutAndRedirect` just above the `return` statement:
  * This function should call the `checkout` action creator.
  * This function should use `history.push` to route to `"/thank-you"`.
* Update the `button` with the `className` of `"cart__checkout"` to call the `checkoutAndRedirect` function.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by creating a `ThankYou` component in `src/components/ThankYou/ThankYou.js`. You'll need to create the `ThankYou` folder and `ThankYou` javascript file. Inside the javascript file let's create a basic react component that returns the JSX from the instructions above.

```js
import React from "react";

export default function ThankYou() {
  return (
    <div className="thank-you">
      <img
        role="presentation"
        src={ thanks }
      />
      <h3>Thank you for your purchase!</h3>
    </div>
  )
}
```

We're now ready to configure a route with this new `ThankYou` component. Open `src/router.js` and import the `ThankYou` component. Then configure a route with a path of `"/thank-you"` and a component of `ThankYou`.

```js
import ThankYou from './components/ThankYou/ThankYou';

export default (
  <Switch>
    <Route component={ Landing } exact path="/" />
    <Route component={ Shop } path="/shop" />
    <Route component={ Details } path="/details/:name" />
    <Route component={ Cart } path="/cart" />
    <Route component={ ThankYou } path="/thank-you" />
  </Switch>
)
```

All that's left is to hook up the button in the `Cart` view to call the `checkout` action creator and change the view to `ThankYou`. Create a new function named `checkoutAndRedirect` which takes no parameters. This function will invoke the `checkout` Redux action creator, then invoke `history.push( "/thank-you" )`.

```js
function checkoutAndRedirect() {
  checkout();
  history.push("/thank-you");
}
```

Then in the JSX add an `onClick` attribute that calls `checkoutAndRedirect`.

```jsx
<button className="cart__checkout" onClick={ checkoutAndRedirect }>Checkout</button>
```

</details>

### Solution

<details>

<summary> <code> src/components/ThankYou/ThankYou.js </code> </summary>

```jsx
import React from "react";
import './ThankYou.css';

import thanks from '../../assets/thanks.gif';

export default function ThankYou() {
  return (
    <div className="thank-you">
      <img
        role="presentation"
        src={ thanks }
      />
      <h3>Thank you for your purchase!</h3>
    </div>
  )
}
```

</details>

<details>

<summary> <code> src/router.js </code> </summary>

```jsx
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Landing from './components/Landing/Landing';
import Shop from './components/Shop/Shop';
import ThankYou from './components/ThankYou/ThankYou';

export default (
  <Switch>
    <Route component={ Landing } exact path="/" />
    <Route component={ Shop } path="/shop" />
    <Route component={ Details } path="/details/:name" />
    <Route component={ Cart } path="/cart" />
    <Route component={ ThankYou } path="/thank-you" />
  </Switch>
)
```

</details>

<details>

<summary> <code> src/components/Cart/Cart.js </code> </summary>

```jsx
import React from "react";
import { connect } from "react-redux";

import "./Cart.css";

import { checkout } from "../../ducks/product";

import CartItem from "./CartItem/CartItem";

export function Cart( { checkout, history, productsInCart } ) {
  const products = productsInCart.map( product => (
    <CartItem
      key={ product.id }
      logo={ product.logo }
      name={ product.name }
      price={ product.price }
    />
  ) );
  const cartTotal = productsInCart.reduce( ( total, { price } ) => total + price, 0 );

  function checkoutAndRedirect() {
    checkout();
    history.push("/thank-you");
  }
  
  return (
    <div className="cart">
      <h1>Cart</h1>
      {
        products.length === 0
          ?
            <h3>Nothing in cart! Go buy something!</h3>
          :
            <main>
              { products }
              <div className="cart__total">
                ${ cartTotal }
              </div>
              <button className="cart__checkout" onClick={ checkoutAndRedirect }>Checkout</button>
            </main>
      }
    </div>
  );
}

function mapStateToProps( { products, productsInCart } ) {
  return { productsInCart: products.filter( product => productsInCart.includes( product.id ) ) }
}

export default connect( mapStateToProps, { checkout } )( Cart );
```

</details>

<br />

<img src="https://github.com/DevMountain/framework-shop/blob/solution/readme-assets/5g.gif" />

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
