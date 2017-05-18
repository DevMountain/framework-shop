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

//  and rendering our application through the router.

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

To being, run `npm i react-router-dom --save` to install and save React Router to the `package.json`. Once that installs, create a new file in `src/` named `router.js`. This file will be where we create and configure our router. To being creating our router we'll need to import `React` from React ince we will be using JSX to declare our routes.

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

The following code means that when the path of our browser is at "/" on our website it will render the `Landing` component.

What is `exact`? Exact allows to specific in React Router v4 that we only want that component to render when the path is exactly "/". If we had a development server running on port 3000, that would mean the landing component would only render at: `http://localhost:3000/`.

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

The following code translates to:
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
  * The `Link` element should have a `to` prop that equals ``` `details/${name}` ```.
* Modify the `p` element with the `className` of `featured-product__price-reduced`:
  * This element should be inside a `ternary statement`.
  * If `onSale` is truthy, render the `p` element.
  * If `onSale` is not truthy, use `null`.

<details>

<summary> Detailed Instructions </summary>

<br />

So we have routes now but no way to get to those routes from the interface. Let's fix that by updating our `Landing` component. Open `src/components/Landing/Landing.js`. Before we make any changes, take a look at the provided `mapStateToProps` and `connect`. This component will take a `products` prop that is an array of of products that are either featured or on sale. We are also passing the `addToCart` action creator to allow for dispatching a new product to cart.

Let's begin by importing `FeaturedProduct` from `src/components/Landing/FeaturedProduct/FeaturedProduct.js` and `Link` from `react-router-dom`. The `Link` component is React Router's replacement for an `<a>` tag which is used to allow the library better control over routing. 

```js
import { Link } from "react-router-dom";
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
```

Near the bottom of render wrap the `h1` with the class `landing__full-shop-link` in a `Link`. `Link` will take one prop called `to` that should equal `"/shop"`.

```js
<Link className="landing__full-shop-link" to="/shop">
  <h1 className="landing__full-shop-link">Take me to the full shop!</h1>
</Link>
```

Our `h1` element on the `Landing` component will now route to the `Shop` component when clicked on.

Now let's work on getting products to actually show up. At the top of the `Landing` function create a new variable `products`. This should equal the result of mapping over `featuredProducts` and returning the following JSX:

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

This will create an array of React components for us. More specifically an array of `FeaturedProduct` components. Since we used a map each featured product will have all the information related to that product. 

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

Now let's replace the commented our sections with the appropriate props. If you notice our props have been destructured using es6. We can tell this happening based on the following code:

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

If we take a look at our live-server ( Live server not running? Run `npm start` when in the root of the project. ) we can see that our landing page is now displaying the correct data for each product. However, it looks like all the prices are reduced and we can't click on the product to go to the details page. Let's fix this. Wrap the `h3` tag that holds the product name in a `Link` component with a `to` prop that equals ``` `details/${name}` ```.

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

Now each product will have a link to its own details page. All that's left now is fixing the "Price Reduced!" label to not display for every product. Let's use a ternary statement to only display that `p` element when `onSale` is truthy. Otherwise just use `null`.

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

<br />

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

## Step 4

**Summary**

In this step we will set up the `Details` component, making use of route parameters to display the correct product data.

<img src="https://github.com/DevMountain/framework-shop/blob/master/readme-assets/details.png" />

**Instructions**

* Use route parameters to select the correct product in `mapStateToProps`
* Update the component JSX to display the product information
* Add a `Link` back to the shop
* If a user adds a product to cart, redirect them back to the page they were previously on

**Detailed Instructions**

This step will take place inside of `src/components/Details/Details.js`. Currently this view is broken, and will throw errors if we try to navigate to it. This is because our `mapStateToProps` function is returning all of our application state instead of the specific product we need.

To fix this we'll need to get access to our route parameters in `mapStateToProps`, luckily `connect` passes a second parameter, `ownProps`, for us that represents the rest of a connected component's `props`. Using this second parameter we can update the return value to something that looks like this:

```javascript
return { product: state.products.find( product => product.name === ownProps.match.params.name ) }
```

The [`match`](https://reacttraining.com/react-router/web/api/match) object is passed to our component via React Router and contains information about how the current route matched the URL, including params.

Now that the component has access to the proper product object go ahead and update the commented sections to display the appropriate data. Import `Link` from React Router and use it inside of the `h3` element to wrap the text in a `Link` component with a `to` prop of `"/shop"`.

Lastly we need to update what happens when the "Buy" button is clicked. Currently it just adds the item to cart in Redux, we want it to also send the user back to the page they were previously on. To do this we will need to use another prop from React Router - `history`. The `history` object represents the [`window.History`](https://developer.mozilla.org/en-US/docs/Web/API/History) api. Write a new function inside of `Details` named `addToCartAndRedirect`. This function will invoke `addToCart` passing `id` as a prop, then invoke `history.goBack` to send the user back to the previous page.

<details>

<summary><b>Code Solution</b></summary>

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
		  description
		, id
		, logo
		, name
		, price
	} = product;

	function addToCartAndRedirect() {
		addToCart( id );
		history.goBack();
	}

	return (
		<div className="details">
			<h3 className="details__back-to-shop"><Link to="/shop">Back to shop</Link></h3>
			<img
				alt={ `${ name } logo` }
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

</details>

### Step 4

**Summary**

In this (short) step we will set up the top navigation bar to display cart information and provide some links.

<img src="https://github.com/DevMountain/framework-shop/blob/master/readme-assets/nav.png" />

**Instructions**

* Add a link to the `Landing` view
* Add a link to the `Cart` view
* Display the total cost of items in cart

**Detailed Instructions**

To get started, open up `src/components/Nav/Nav.js` and import `Link` from `react-router-dom`. Wrap the `div` with a class of `nav__header-wrapper` in a `Link` component with a `to` prop of `"/"`. Wrap the `p` with a class of `nav__cart` in a `Link` component with a `to` prop of `"/cart"`.

Lastly, you'll notice that the Redux selector is passing in a `cartTotal` prop, display that inside of the `p.nav__cart`.

That was quick and easy! Now you have the ability to navigate around the application better and should see the total update anytime you add a product to cart.

<details>

<summary><b>Code Solution</b></summary>

```jsx
// src/components/Nav/Nav.js

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
			<Link to="/cart"><p className="nav__cart">Cart ( ${ cartTotal } )</p></Link>
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

### Step 5

**Summary**

In this step we will set up the `Shop` view and its child components.

<img src="https://github.com/DevMountain/framework-shop/blob/master/readme-assets/shop.png" />

**Instructions**

* Render a list of `ProductTile` components in `src/components/Shop/Shop.js`
* Update the commented sections of `src/components/Shop/ProductTile/ProductTile.js` with the appropriate props
* Wrap the `h3` containing the product name in a `Link` component with a `to` prop of <code>/details/${ name }</code>

No detailed instructions for this step! If you get stuck try these before reading the solution:

* This step is very similar to how we set up the `Landing` and `FeaturedProducts` components. Refer back to that!
* Check the bottom of the `ProductTile` file to see the `propTypes` the component is expecting.

<details>

<summary><b>Code Solution</b></summary>

<details>

<summary><code>src/components/Shop/Shop.js</code></summary>

```jsx
import React from "react";
import { connect } from "react-redux";

import "./Shop.css";

import { addToCart } from "../../ducks/product";

import ProductTile from "./ProductTile/ProductTile";

export function Shop( { addToCart, products } ) {
	const productTiles = products.map( product => (
		<ProductTile
			addToCart={ () => addToCart( product.id ) }
			key={ product.id }
			logo={ product.logo }
			name={ product.name }
			price={ product.price }
		/>
	) );

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

<summary><code>src/components/Shop/FeaturedProduct/FeaturedProduct.js</code></summary>

```jsx
import React, { PropTypes } from "react";
import { Link } from "react-router-dom";

import "./ProductTile.css";

export default function ProductTile( { addToCart, logo, name, price } ) {
	return (
		<div className="product-tile">
			<section className="product-tile__info">
				<Link to={ `/details/${ name }` }><h3>{ name }</h3></Link>
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
	  addToCart: PropTypes.func.isRequired
	, logo: PropTypes.string.isRequired
	, name: PropTypes.string.isRequired
	, price: PropTypes.number.isRequired
};
```

</details>

</details>

### Step 6

**Summary**

In this step we will allow users to checkout from the cart view, creating a new component to thank them for their purchase.

**Instructions**

* Add a click handler to the checkout button that redirects the user to `"/thank-you"`
* Create a new `ThankYou` component in `src/components/ThankYou/ThankYou.js`
* Adjust the router to handle the `"/thank-you"` route

**Detailed Instructions**

Start in `src/components/Cart/Cart.js`. Create a new function named `checkoutAndRedirect` which takes no parameters. This function will invoke the `checkout` Redux action creator, then invoke `history.push( "/thank-you" )`. `history.push` is another method from the `window.History` API that allows us to redirect to a new route.

Currently that route won't work too well, as we haven't set up a component or the router to handle it yet! Start by creating a new directory `src/components/ThankYou` and two files inside of that directory `ThankYou.js` and `ThankYou.css`. `ThankYou.css` should hold the following styles:

```css
.thank-you {
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 25px;
}
```

In `ThankYou.js` import:

* `React` from React
* `ThankYou.css`
* And `thanks` from `src/assets/thanks.gif`

Create and export by default a functional component named `ThankYou`. This component should just return the following JSX:

```jsx
<div className="thank-you">
	<img
		role="presentation"
		src={ thanks }
	/>
	<h3>Thank you for your purchase!</h3>
</div>
```

Finally, import your `ThankYou` component into `src/router.js` and create a new `Route` where the `path` is `"/thank-you"` and the `component` is `ThankYou`.

That's it! You should now be able to walk through the full e-commerce flow of viewing, selecting, and "buying" items!

<details>

<summary><b>Code Solution</b></summary>

<details>

<summary><code>src/components/Cart/Cart.js</code></summary>

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
		history.push( "/thank-you" );
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
							<button
								className="cart__checkout"
								onClick={ checkoutAndRedirect }
							>
								Checkout
							</button>
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

<details>

<summary><code>src/components/ThankYou/ThankYou.js</code></summary>

```jsx
import React from "react";

import "./ThankYou.css";

import thanks from "../../assets/thanks.gif";

export default function ThankYou() {
	return (
		<div className="thank-you">
			<img
				role="presentation"
				src={ thanks }
			/>
			<h3>Thank you for your purchase!</h3>
		</div>
	);
}
```

</details>

<details>

<summary><code>src/router.js</code></summary>

```jsx
import React from "react";
import { Route, Switch } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import Landing from "./components/Landing/Landing";
import Shop from "./components/Shop/Shop";
import ThankYou from "./components/ThankYou/ThankYou";

export default (
	<Switch>
		<Route
			component={ Landing }
			exact
			path="/"
		/>
		<Route
			component={ Shop }
			path="/shop"
		/>
		<Route
			component={ Details }
			path="/details/:name"
		/>
		<Route
			component={ Cart }
			path="/cart"
		/>
		<Route
			component={ ThankYou }
			path="/thank-you"
		/>
	</Switch>
);
```

</details>

</details>

## Contributions

### Contributions

#### 
 
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

### Copyright

#### 

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
