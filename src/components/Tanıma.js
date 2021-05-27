import React from "react";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";
import Title from "./Title"
// MaterialUI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import TextField from '@material-ui/core/TextField';
import { useTheme } from '@material-ui/core/styles';
import { ResponsiveContainer } from 'recharts';



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
	},
	fixedHeight: {
		height: 240,
	},
}));


const Tanıma = () => {
	const theme = useTheme();
	const classes = useStyles();

	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
		<div className={classes.root}>
			<main className={classes.content}>
			  	<div className={classes.appBarSpacer} />
			  	<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						{/*Tanıma*/}
						<Grid item xs={12} md={8} lg={9}>
							<Paper className={fixedHeightPaper}>
								<React.Fragment>
									<Title>Tanıma Yöntemleri</Title>
									<ResponsiveContainer>
										<PopupState variant="popover" popupId="demo-popup-popover">
											{(popupState) => (
												<div>
													<Button variant="contained" color="primary" {...bindTrigger(popupState)}>
														Open Popover
													</Button>
													<Popover
														{...bindPopover(popupState)}
														anchorOrigin={{
														vertical: 'bottom',
														horizontal: 'center',
														}}
														transformOrigin={{
														vertical: 'top',
														horizontal: 'center',
														}}
													>
														<Box p={2}>
															<TextField
																// value={this.state.message}
																// autoFocus={true}
																// hintText='Type your message here'
																// onChange={this.onChangeMessage}
																// onKeyUp={(event) => {
																// 	if (event.ctrlKey && event.key== 'Enter')
																// 		this.sendMessage();
																// }}
															/>
														</Box>
													</Popover>
												</div>
											)}
										</PopupState>
										</ResponsiveContainer>
										<ResponsiveContainer>
										<PopupState variant="popover" popupId="demo-popup-popover">
											{(popupState) => (
												<div>
													<Button variant="contained" color="primary" {...bindTrigger(popupState)}>
														Open Popover
													</Button>
													<Popover
														{...bindPopover(popupState)}
														anchorOrigin={{
														vertical: 'bottom',
														horizontal: 'center',
														}}
														transformOrigin={{
														vertical: 'top',
														horizontal: 'center',
														}}
													>
														<Box p={2}>
															<TextField
																// value={this.state.message}
																// autoFocus={true}
																// hintText='Type your message here'
																// onChange={this.onChangeMessage}
																// onKeyUp={(event) => {
																// 	if (event.ctrlKey && event.key== 'Enter')
																// 		this.sendMessage();
																// }}
															/>
														</Box>
													</Popover>
												</div>
											)}
										</PopupState>
									</ResponsiveContainer>
								</React.Fragment>
							</Paper>
						</Grid>
						
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
						{/* Recent Orders */}
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<Orders />
							</Paper>
						</Grid>
                        {/* Recent Orders */}
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<Orders />
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
}

export default Tanıma;