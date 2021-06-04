const initialState = {
	products: [],
};

export const ProductsReducer = (state = initialState, action) => {
	console.log(action.payload);
	console.log(state);
	switch (action.type) {
		case "ADD_TO_CART":
			console.log(state);
			return { ...state, products: action.payload };
		default:
			return state;
	}
};
