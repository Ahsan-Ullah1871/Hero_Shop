import React from "react";
import styles from "./HomeMainPart.module.css";
import Header from "../Header/Header";
import ProductsMainPart from "../ProductsComponent/ProductsMainPart/ProductsMainPart";
import Feature from "../Feature/Feature";
import MiddleBanner from "../MiddleBanner/MiddleBanner";
import FooterMainPart from "../FooterComponents/FooterMainPart/FooterMainPart";

const HomeMainPart = () => {
	return (
		<div className={styles.HomeMainPart}>
			<Header />
			{/* <Feature /> */}
			<ProductsMainPart />
			<MiddleBanner />
			<FooterMainPart />
		</div>
	);
};

export default HomeMainPart;
