import React from "react";
import "./Feature.css";
import featureIcon from "../../../Images/icon.png";

const features = [
	{
		featureIcon: featureIcon,
		featureHeader: "100% Satisfaction",
		featureInfo:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
	},
	{
		featureIcon: featureIcon,
		featureHeader: "100% Satisfaction",
		featureInfo:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
	},
	{
		featureIcon: featureIcon,
		featureHeader: "100% Satisfaction",
		featureInfo:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
	},
	{
		featureIcon: featureIcon,
		featureHeader: "100% Satisfaction",
		featureInfo:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
	},
];
const Feature = () => {
	return (
		<div className="grid grid-cols-4 gap-x-9 mt-20  px-10">
			{features.map((feature) => {
				return (
					<>
						<div data-aos="zoom-in-right">
							<div className="FeatureCard container   grid  grid-rows-2 p-5 rounded-lg   ">
								<div className="header grid  grid-cols-2 ">
									<div className="w-20">
										<img
											src={
												feature.featureIcon
											}
											alt=""
										/>
									</div>
									<div className="flex items-center">
										<h5>
											{
												feature.featureHeader
											}
										</h5>
									</div>
								</div>
								<div className="info">
									{
										feature.featureInfo
									}
								</div>
							</div>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default Feature;

 