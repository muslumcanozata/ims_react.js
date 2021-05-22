import { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginContext from '../../contexts/login/loginContext'
import React from 'react';

const Dashboard = () => {

  const { didMount, handleLogout } = useContext(LoginContext)

  useEffect(() => {
    didMount();
  }, []);

  return localStorage.getItem('token') ? (
    <div>
      <p>Hello React</p>
      <li onClick={handleLogout}>Logout</li>
    </div>

  ) : (
    <Redirect to="/login"/>
  );
};

export default Dashboard;
