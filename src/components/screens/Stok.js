import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginContext from '../../contexts/login/loginContext';
import Sidebar from '../menus/Sidebar';
import Header from '../menus/Header';
import StokTakip from '../papers/StokTakip';
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

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
