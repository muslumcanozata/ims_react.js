import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import RFIDContext from '../../contexts/rfid/rfidContext';
import LoginContext from '../../contexts/login/loginContext';
import Header from '../menus/Header';
import Sidebar from '../menus/Sidebar';
import UrunTeslim from '../urunTeslim';
//Material-UI
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
		width: theme.spacing(9),
		},
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
}));

const UrunTeslimDetailsPage = () => {
    const { isIdentificate } = useContext(RFIDContext)
    const { didMount, isLogin } = useContext(LoginContext)

	const classes = useStyles();

	useEffect(() => {
		didMount();
	}, []);

  	return (
		(isLogin)
	  	?
		((isIdentificate) ? 
			(<div className={classes.root}>
				<Header />
				<Sidebar />
				<UrunTeslim/>
			</div>)
            :
            (<Redirect to="/urunteslim"/>))
		:
    	(<Redirect to="/giris"/>)
    );
}

export default UrunTeslimDetailsPage;
