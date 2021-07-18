import React from "react";
import Copyright from "./Copyright";
// MaterialUI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './papers/homepage/Chart';
import Deposits from './papers/homepage/Deposits';

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
	fixedHeight: {
		height: 240,
	},
}));


const HomePage = () => {

	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  	return (
		<div className={classes.root}>
			<CssBaseline />
			<main className={classes.content}>
			  	<div className={classes.appBarSpacer} />
			  	<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						{/* Chart */}
						<Grid item xs={12} md={8} lg={9}>
							<Paper className={fixedHeightPaper}>
								<Chart />
							</Paper>
						</Grid>
						{/* Recent Deposits */}
						<Grid item xs={12} md={4} lg={3}>
							<Paper className={fixedHeightPaper}>
								<Deposits />
							</Paper>
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

export default HomePage;
