import React from "react";
import { Link } from "react-router-dom";

const HotFoodsLinks = () => {
	return (
		<>
			<h4 className="special-footer-text text-center">
				Hot Foods
				<div className="special-footer-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6  "
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</div>
			</h4>
			<Link className="flex justify-around items-center">
				Fast Food
				<div className="special-footer-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6  "
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</div>
			</Link>
			<Link className="flex justify-around items-center">
				Chicken
				<div className="special-footer-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6  "
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</div>
			</Link>
			<Link className="flex justify-around items-center">
				Burger
				<div className="special-footer-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6  "
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</div>
			</Link>
			<Link className="flex justify-around items-center">
				{" "}
				Kacchi
				<div className="special-footer-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6  "
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</div>
			</Link>
		</>
	);
};

export default HotFoodsLinks;
