import React from "react";
import "./ProductsMainPart.css";
import { Route, Switch, useRouteMatch } from "react-router";
import MiddleNav from "../../../SharedComponents/MiddleNav/MiddleNav";
import ProductsByCategory from "../ProductsByCategory/ProductsByCategory";

const ProductsMainPart = () => {
	let { path, url } = useRouteMatch();
	return (
		<div className="productsPart ">
			<div className="productsHeader flex justify-center">
				<h2>
					<span className="special-text">
						PRODUCTS
					</span>
				</h2>
			</div>

			<hr className="divider flex justify-center" />
			<div className="productsMainPart">
				<ProductsByCategory />
			</div>
		</div>
	);
};

export default ProductsMainPart;
