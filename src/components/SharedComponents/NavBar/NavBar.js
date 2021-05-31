import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../Images/logo.png";
import CartIcon from "./CartIcon";

const NavBar = () => {
	return (
		<div className="navPart flex flex-row justify-around	items-center	">
			<div className="logo">
				<h1>Eating-House</h1>
			</div>
			<div className="navMenu flex   ">
				<Link className="   	">Home</Link>
				<Link>Shop</Link>
				<Link>Blog</Link>
				<Link>About Us</Link>
				<Link>Contact</Link>
			</div>
			<div className="specialLink flex items-center">
				<Link>
					{" "}
					<CartIcon />
				</Link>
				<Link className="flex items-center" to="/login">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-5  m-1"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
							clipRule="evenodd"
						/>
					</svg>
					LogIn
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
