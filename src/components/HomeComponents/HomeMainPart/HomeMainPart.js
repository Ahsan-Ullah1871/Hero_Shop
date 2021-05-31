import React from "react";
import styles from "./HomeMainPart.module.css";
import Header from "../Header/Header";
import ProductsMainPart from "../ProductsComponent/ProductsMainPart/ProductsMainPart";
import Feature from "../Feature/Feature";

const HomeMainPart = () => {
	return (
		<div className={styles.HomeMainPart}>
			<Header />
			<Feature />
			<ProductsMainPart />
			
		</div>
	);
};

export default HomeMainPart;
