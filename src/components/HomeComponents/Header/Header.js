import React from "react";
import NavBar from "../../SharedComponents/NavBar/NavBar";
import styles from "./Header.module.css";
import TopBanner from "./TopBanner/TopBanner";

const Header = () => {
	return (
		<div className={styles.headerPart}>
			<NavBar />
			<TopBanner />
		</div>
	);
};

export default Header;
