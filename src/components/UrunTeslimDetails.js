import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Copyright from "./Copyright";
import Title from "./Title"
import RFIDContext from "../contexts/rfid/rfidContext";
// MaterialUI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { useTheme } from '@material-ui/core/styles';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	title: {
		flexGrow: 1,
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
		width: 1500
	},
	fixedHeight: {
		height: 500,
	},
	tanimaPaper: {
 		height: 120,
	},
}));


const UrunTeslimDetails = () => {
	const theme = useTheme();
	const classes = useStyles();
	const history = useHistory();

	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	const tanimaPaper = clsx(classes.paper, classes.tanimaHeight);

	const { rfid, isIdentificate, isno, handleRFin, handleRFChange } = useContext(RFIDContext)

	function goBack() {
		history.push(`/urunteslim/`)
	}

    return (
		(<div className={classes.root}>
			<main className={classes.content}>
			  	<div className={classes.appBarSpacer} />
			  	<Container maxWidth="lg" className={classes.container}>
					<Paper className={classes.paper} >
						<Grid container spacing={3} className={classes.root} >
						{/*Urun Teslim*/}
							<Grid item >
								<React.Fragment>
									<Title>Personel Bilgileri</Title>
										<Grid container spacing={3}>
											<p>
                                                rfid: {rfid}, isno: {isno}
                                            </p>
										</Grid>
								</React.Fragment>
							</Grid>
						</Grid>
					</Paper>
					<Box pt={4}>
						<Copyright />
					</Box>
			  </Container>
			</main>
    	</div>)
	);
}

export default UrunTeslimDetails;