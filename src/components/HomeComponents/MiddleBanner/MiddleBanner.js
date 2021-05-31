import React from "react";
import "./MiddleBanner.css";

const MiddleBanner = () => {
	return (
		<div className="middleBannerPart my-10  flex justify-center items-center">
			<div
				data-aos="flip-left"
				data-aos-easing="ease-out-cubic"
				data-aos-duration="2000"
			>
				<h2 className="special-text">Fruits Stock</h2>
				<h2>60% Offer</h2>
				<h5>
					This offer is for a very limited time. So why
					the delay! Order now at our shop ...
				</h5>
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">
					Buy Now
				</button>
			</div>
		</div>
	);
};

export default MiddleBanner;