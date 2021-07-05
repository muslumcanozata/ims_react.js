import React, { useContext,useState } from "react";
import { useHistory } from "react-router-dom";
import Copyright from "../Copyright";
import Title from "../Title"
import RFIDContext from "../../contexts/rfid/rfidContext";
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
	root: {
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
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
	tanimaPaper: {
 		height: 120,
	},
	heading: {
		fontSize: theme.typography.pxToRem(20),
		fontWeight: theme.typography.fontWeightBold,
	},
}));


const Tanıma = () => {
	const classes = useStyles();
	const history = useHistory();

	const { rfid, qr, handleIDin, handleRFin, handleQRin, handleRFChange } = useContext(RFIDContext)

	const [QRChange, setQRChange] = useState('')

	function handleRegEx(event, data){
		var str = data.tel;
		var result = str.match(/CELL:\s*([^\n\r]*)/g);
		var ds1 = result[0];
		var realtel = ds1.slice(5, 16);

		handleQRin(event, {
			tel: realtel
		})

		event.target.value = ''
		history.push(`/urunteslimdetay`)
	}

    return (
		<div className={classes.root}>
			<main className={classes.content}>
			  	<div className={classes.appBarSpacer} />
			  	<Container className={classes.container}>
					<Paper className={classes.paper}>
						<Grid container spacing={3} style={{display: 'flex'}}>
						{/*Accordion*/}
							<Grid item>
								<React.Fragment>
									<Title>Bekleyen Siparişler</Title>
										<Grid container >
											<Accordion >
												<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel1a-content"
												id="panel1a-header"
												>
													<Typography className={classes.heading}>4543143684</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Grid item xs={12} md={4} lg={4} xl={4}>
														<i class="fas fa-mars fa-lg"> : Süleyman Çamurlu</i>
														<div style={{margin: '20px'}}></div>
														<i class="fas fa-phone-square-alt fa-lg"> : 536 637 6862</i>
													</Grid>
													<Grid item xs={12} md={4} lg={4} xl={4}>
														<i class="fas fa-user-shield fa-lg"> : 77777</i>
														<div style={{margin: '20px'}}></div>
														<i class="fas fa-users fa-lg"> : Pres</i>
													</Grid>
													<Grid item xs={12} md={4} lg={4} xl={4}>
														<i class="fas fa-id-card fa-lg"> : 0974280964</i>
														<div style={{margin: '15px'}}></div>
														<Button onClick={() => {}} 	variant="contained" color="primary" 		
														>
															Teslim Et
														</Button>
													</Grid>
													<Grid>
														{/* Ürün Listesi */}
													</Grid>
												</AccordionDetails>
											</Accordion>
										</Grid>
										<Grid container>
											<Accordion>
												<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel2a-content"
												id="panel2a-header"
												>
													<Typography className={classes.heading}>Accordion 2</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
														sit amet blandit leo lobortis eget.
													</Typography>
												</AccordionDetails>
											</Accordion>
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