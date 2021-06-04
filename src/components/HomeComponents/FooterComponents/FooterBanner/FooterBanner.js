import React from "react";
import "./FooterBanner.css";

const FooterBanner = () => {
	return (
		<div className="footerBanner flex justify-center items-center">
			<div>
				<div className="footerBannerHeader">
					<h3>NEWSLETTER</h3>
					<p>
						Subscribe to the weekly newsletter for
						all the latest updates
					</p>
				</div>
				<div className="footerBannerSubscribe"></div>
			</div>
		</div>
	);
};

export default FooterBanner;
