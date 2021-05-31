import React from "react";
import "./TopBanner.css";
import topBannerImage from "../../../../Images/burger.png";
import topBannerSecondImage from "../../../../Images/pata.png";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

const TopBanner = () => {
	return (
		<div data-aos="zoom-out-right">
			<div className="topBanner  h-70%  flex ">
				<div className="bannerImagePart w-1/2">
					<Zoom left>
						<div className="image1">
							<img
								className="mx-5 "
								src={topBannerImage}
								alt=""
							/>
						</div>
					</Zoom>

					<div className="image2">
						<Bounce top>
							<img
								className="mx-5 "
								src={
									topBannerSecondImage
								}
								alt=""
							/>
						</Bounce>
					</div>
				</div>

				<div className="bannerText 	w-1/2  mx-auto  my-auto	text-center">
					<h3>
						<Zoom left cascade>
							Order the most delicious and
							fun barbecue right now from our
							website.
						</Zoom>
					</h3>
					<div
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2000"
					>
						<button class="rounded-lg px-5 py-2 transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 text-lg	 mt-10 ">
							Buy Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBanner;
