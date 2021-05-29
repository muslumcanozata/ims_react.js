import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";
import Title from "./Title"
import { ResponsiveContainer } from 'recharts';
// MaterialUI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import TextField from '@material-ui/core/TextField';
import { useTheme } from '@material-ui/core/styles';
import RFIDContext from "../contexts/rfid/rfidContext";



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
	tanimaPaper: {
 		height: 120,
	},
}));


const Tanıma = () => {
	const theme = useTheme();
	const classes = useStyles();

	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	const tanimaPaper = clsx(classes.paper, classes.tanimaHeight);

	const { rfid, isIdentificate, handleRFin, handleRFChange } = useContext(RFIDContext)

    return ((isIdentificate) ? 
		(<Link to={`/urunteslim/${rfid}`} />)
		:
		<div className={classes.root}>
			<main className={classes.content}>
			  	<div className={classes.appBarSpacer} />
			  	<Container maxWidth="lg" className={classes.container}>
					<Paper className={classes.paper} >
						<Grid container spacing={3} className={classes.root} >
						{/*Tanıma*/}
							<Grid item >
								<React.Fragment>
									<Title>Tanıma Yöntemleri</Title>
										<Grid container spacing={3}>
											<Grid item xs={12} md={6} lg={4} xl={4}>
												<PopupState variant="popover" popupId="demo-popup-popover">
													{(popupState) => (
														<div>
															<Button variant="contained" color="primary" {...bindTrigger(popupState)}>
   																Personel Kartı İle Tanıma
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
																			value={rfid}
																			autoFocus={true}
																			hintText='Type your message here'
																			onChange={handleRFChange}
																			onKeyUp={(event) => {
																				if ( event.key === 'Enter'){
																					handleRFin(event, {
																						rfid: rfid
																					})
																				} 
																			}}
																		/>
																</Box>
															</Popover>
														</div>
													)}
												</PopupState>
											</Grid>
											<Grid item xs={12} md={6} lg={4} xl={4} className={classes.item}>
												<PopupState variant="popover" popupId="demo-popup-popover">
													{(popupState) => (
														<div>
															<Button variant="contained" color="primary" {...bindTrigger(popupState)}>
																Open PopOver
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
																		// 	if ( event.key === 'Enter')
																		// 		this.sendMessage();
																		// }}
																	/>
																</Box>
															</Popover>
														</div>
													)}
												</PopupState>
											</Grid>
											<Grid item xs={12} md={6} lg={4} xl={4} className={classes.item}>
												<PopupState variant="popover" popupId="demo-popup-popover">
													{(popupState) => (
														<div>
															<Button variant="contained" color="primary" {...bindTrigger(popupState)}>
																OpenPopOver
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
																		// 	if ( event.key === 'Enter')
																		// 		this.sendMessage();
																		// }}
																	/>
																</Box>
															</Popover>
														</div>
													)}
												</PopupState>
											</Grid>
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
    	</div>
	);
}

export default Tanıma;