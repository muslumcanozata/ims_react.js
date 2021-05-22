import { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginContext from '../../contexts/login/loginContext';

const Home = () => {

  const { didMount } = useContext(LoginContext)

  useEffect(() => {
    didMount();
  }, []);

  return localStorage.getItem('token') ? (
    <Redirect to="/dashboard" />) :
    (<Redirect to="/login" />)
};

export default Home
