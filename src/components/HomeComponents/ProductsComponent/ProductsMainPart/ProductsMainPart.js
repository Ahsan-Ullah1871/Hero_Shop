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
						FEATURED
					</span>{" "}
					PRODUCTS
				</h2>
			</div>
			<div className="productNav ">
				<MiddleNav />
            </div>
            <hr className="divider flex justify-center"/>
			<div className="productsMainPart">
				<Switch>
					<Route exact path={path}>
						<h2>Hello</h2>
					</Route>
					<Route path={`${path}/:categoryName`}>
						<ProductsByCategory />
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default ProductsMainPart;
