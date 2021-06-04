export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";

export const addInCart = (data) => (dispatch) => {
	dispatch({ type: ADD_PRODUCTS, payload: data });
};
