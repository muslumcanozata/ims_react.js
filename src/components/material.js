import React, { useContext, useState } from "react";
import Copyright from "./Copyright";
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RFIDContext from "../contexts/rfid/rfidContext";
import MaterialTitle from "./papers/materyalTeslim/MaterialTitle";
import MaterialAccordion from "./papers/materyalTeslim/MaterialAccordion";

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
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
}));


const Material = () => {
	const classes = useStyles();

  	return (
		<div className={classes.root}>
			<CssBaseline />
			<main className={classes.content}>
			  	<div className={classes.appBarSpacer} />
			  	<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						{/* MaterialTitle */}
						<Grid item xs={12} md={12} lg={12}>
							<Paper className={classes.paper}>
                                <MaterialTitle />
							</Paper>
						</Grid>
						{/* MaterialAccordion */}
						<Grid item xs={12} md={12} lg={12}>
                            <MaterialAccordion/>
						</Grid>
					</Grid>
					<Box pt={4}>
						<Copyright />
					</Box>
			  </Container>
			</main>
    	</div>
	);
};

export default Material;
