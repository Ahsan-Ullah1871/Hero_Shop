import { combineReducers } from "redux";
import { ProductsReducer } from "./productsReducer";

export const rootReducers = combineReducers({
	products: ProductsReducer,
});
