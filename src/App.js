import React, { useEffect, useContext } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/screens/Dashboard"
import LoginScreen from "./components/screens/LoginScreen";
import LoginContext from "./contexts/login/loginContext";
import Home from './components/screens/Home';
import UrunTeslimPage from "./components/screens/UrunTeslimPage";
import UrunTeslimDetailsPage from "./components/screens/UrunTeslimDetailsPage.js";
import YuzTanitma from './components/screens/YuzTanitma'
import MateryalTeslim from './components/screens/MateryalTeslim';

const App = () => {
	const { didMount } = useContext(LoginContext);

	useEffect(( ) => {
		didMount();
	}, [])

	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/giris" exact component={LoginScreen}></Route>
					<Route path="/anasayfa" exact component={Dashboard}></Route>
					<Route path="/urunteslim" exact component={UrunTeslimPage}></Route>
					<Route path="/urunteslimdetay" exact component={UrunTeslimDetailsPage}></Route>
					<Route path="/yuztanitma" exact component={YuzTanitma}></Route>
					<Route path="/materyalteslim" exact component={MateryalTeslim}></Route>
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;