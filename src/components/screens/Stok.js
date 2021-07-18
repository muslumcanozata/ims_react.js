import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginContext from '../../contexts/login/loginContext';
import Sidebar from '../menus/Sidebar';
import Header from '../menus/Header';
import StokTakip from '../stokTakip.js';
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
}));


const Stok = () => {
    const { isLogin, didMount } = useContext(LoginContext)

	const classes = useStyles();

	useEffect(( ) => {
		didMount();
		// eslint-disable-next-line
	}, [])


    return ((isLogin)
		?
 		(
			(<div className={classes.root}>
				<Header />
				<Sidebar />
				<StokTakip />
			</div>))
  		:
		<Redirect to="/anasayfa" />
	);
}

export default Stok;
