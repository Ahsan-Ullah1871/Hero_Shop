import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeMainPart from "./components/HomeComponents/HomeMainPart/HomeMainPart";
import { createContext, useContext, useState } from "react";
AOS.init();

export const UserContext = createContext();
function App() {
	const [user, setUser] = useState([]);
	return (
		<div>
			<UserContext.Provider value={[user, setUser]}>
				<Router>
					<Switch>
						<Route exact path="/">
							<HomeMainPart />
						</Route>
						<Route path="/home">
							<HomeMainPart />
						</Route>
					</Switch>
				</Router>
			</UserContext.Provider>
		</div>
	);
}

export default App;
