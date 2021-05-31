import React from "react";
import styles from "./HomeMainPart.module.css";
import Header from "../Header/Header";
import ProductsMainPart from "../ProductsComponent/ProductsMainPart/ProductsMainPart";

const HomeMainPart = () => {
	return (
		<div className={styles.HomeMainPart}>
			<Header />
			<ProductsMainPart />
		</div>
	);
};

export default HomeMainPart;
