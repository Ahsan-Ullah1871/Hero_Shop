import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsByCategory.css";

const ProductsByCategory = () => {
	let { categoryName } = useParams();
	console.log(categoryName);
	const [products, setProducts] = useState();
	useEffect(() => {
		axios({
			method: "get",
			url: `https://sheltered-cove-62018.herokuapp.com/getProduct`,
			responseType: "stream",
		}).then(function (response) {
			setProducts(response.data);
		});
	}, [categoryName]);
	console.log(products);
	return (
		<div className="container mx-10  flex flex-wrap justify-center	 ">
			{products?.map((product) => (
				<ProductCard product={product} />
			))}
		</div>
	);
};

export default ProductsByCategory;
