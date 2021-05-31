import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
	return (
		<>
			<div className="productCard">
				<div className="productImage">
					<img src={product.photo_url} alt="" />
				</div>
				<div className="productInfo mt-10">
					<div className="productDescription">
						<h4 className="special-text">
							{product.productName}
						</h4>
						<h6>{product.weight}</h6>
					</div>

					<div className="price">
						<p className="special-text">
							{product.price} Tk.
						</p>
					</div>
				</div>
				<div className="productBtn flex items-center justify-between	 mt-5">
					<div className="addToCart py-2 px-6 rounded-full border border-gray-300">
						<button className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mx-2"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
							</svg>
							Add To Cart
						</button>
					</div>
					<div className="loveReact  rounded-full h-10 w-10 flex items-center justify-center">
						<button className="text-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
