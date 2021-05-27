import { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginContext from '../../contexts/login/loginContext';

const Home = () => {
  	const { isLogin, didMount } = useContext(LoginContext)

	useEffect(( ) => {
		didMount()
	}, [])

  	return ((isLogin) ? (
    	<Redirect to="/anasayfa" />) :
    	(<Redirect to="/giris" />))
};

export default Home
