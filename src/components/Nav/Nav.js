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
