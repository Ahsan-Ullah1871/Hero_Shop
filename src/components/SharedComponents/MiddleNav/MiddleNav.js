import React from "react";
import "./MiddleNav.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from "react-router-dom";
const MiddleNav = () => {
	let { path, url } = useRouteMatch();
	return (
		<div className="middleNavPart flex justify-center ">
			<Link to={`${url}/breakfast`}>Breakfast</Link>
			<Link to={`${url}/Lunch`}>Lunch</Link>
			<Link to={`${url}/Dinner`}>Dinner</Link>
		</div>
	);
};

export default MiddleNav;
