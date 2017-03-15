import products from "../products";

const ADD_TO_CART = "ADD_TO_CART";
const CHECKOUT = "CHECKOUT";

const initialState = {
	  products
	, productsInCart: []
};

export default function product( state = initialState, action ) {
	switch ( action.type ) {
		case ADD_TO_CART:
			return state.productsInCart.includes( action.productId )
				?
					state
				:
					{
						  products: state.products
						, productsInCart: [ ...state.productsInCart, action.productId ]
					};
		case CHECKOUT:
			return initialState;
		default: return state;
	}
}

export function addToCart( productId ) {
	return { productId, type: ADD_TO_CART };
}

export function checkout() {
	return { type: CHECKOUT };
}
