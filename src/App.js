import React, { useEffect, useContext } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/screens/Dashboard"
import LoginScreen from "./components/screens/LoginScreen";
import LoginContext from "./contexts/login/loginContext";
import Home from './components/screens/Home';
import UrunTeslim from "./components/screens/UrunTeslim";
import UrunTeslimDetailsPage from "./components/screens/UrunTeslimDetailsPage.js";


const App = () => {
	const { didMount } = useContext(LoginContext);

	useEffect(( ) => {
		didMount();
	}, [])

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/giris" exact component={LoginScreen}></Route>
				<Route path="/anasayfa" exact component={Dashboard}></Route>
				<Route path="/urunteslim" exact component={UrunTeslim}></Route>
				<Route path="/urunteslim/:rfidentification" exact component={UrunTeslimDetailsPage}></Route>
				</Switch>
		</BrowserRouter>
	);
};

export default App;