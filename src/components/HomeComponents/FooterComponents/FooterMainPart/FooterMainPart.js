import React from "react";
import "./FooterMainPart.css";
import FooterBanner from "../FooterBanner/FooterBanner";
import Footer from "../Footer/Footer";
import FooterLastPart from "../FooterLastPart/FooterLastPart";

const FooterMainPart = () => {
	return (
		<div className="footerMainPart ">
			<Footer />
			<hr className="divider flex justify-center my-10" />
			<FooterLastPart />
		</div>
	);
};

export default FooterMainPart;
