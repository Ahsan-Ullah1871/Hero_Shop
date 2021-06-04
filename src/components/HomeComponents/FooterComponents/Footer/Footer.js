import React from "react";
import "./Footer.css";
import HotFoodsLinks from "./HotFoodsLinks";
import QuickLinks from "./QuickLinks";

const Footer = () => {
	return (
		<div className="container w-30 grid grid-cols-4 gap-4 justify-center mx-auto my-10 ">
			<div className="logoPart">
				<h1 className="logo-text">Eating-House</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Vero nobis libero dicta
					harum laudantium explicabo architecto tempore
					quam cumque magnam!
				</p>
			</div>
			<div className="quickLinks mx-auto">
				<QuickLinks />
			</div>
			<div className="hotCategories w-1/2">
				<HotFoodsLinks />
			</div>
			<div className="shopCustomerCare">
				<h4 className="special-footer-text">Contact us</h4>
				<h5>018729918888</h5>
				<h5>Rangpur Sadar</h5>
				<h5>ahsanullahsunsbd@gmail.com</h5>
			</div>
		</div>
	);
};

export default Footer;
