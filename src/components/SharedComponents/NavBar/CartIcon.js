import React from "react";
import "./CartIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartIcon = () => {
	return (
		<div className="CartIcon">
			<FontAwesomeIcon
				style={{ fontSize: "30px" }}
				icon={faShoppingCart}
			/>
			<div className="circleBadge">0</div>
		</div>
	);
};

export default CartIcon;
