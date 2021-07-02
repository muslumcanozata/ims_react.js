import React, { useContext,useState } from "react";
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
import TextField from '@material-ui/core/TextField';

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
		width: '500px'
	},
	fixedHeight: {
		height: 500,
	},
	tanimaPaper: {
 		height: 120,
	},
	button: {
		display: 'flex',
		width: '150px',
		marginTop: '15px',
		marginLeft: '10px',
		height: '55px',
		textTransform: 'none',
		fontSize: '18px'
	}
}));


const Tanıma = () => {
	const classes = useStyles();

	const { setFaceID } = useContext(RFIDContext)
	
	const handleChange = (event) => {
		setIsno(event.target.value)
	}

	const [isno, setIsno] = useState('')

    return (
		<div className={classes.root}>
			<main className={classes.content}>
			  	<div className={classes.appBarSpacer} />
			  	<Container maxWidth="lg" className={classes.container}>
					<Paper className={classes.paper} >
						<Grid container spacing={3} className={classes.root} >
						{/*Yüz Tanıtma Formu*/}
							<Grid item >
								<React.Fragment>
									<Title>Yüz Tanıtma Formu</Title>
										<Grid container spacing={3}>
											<Grid item xs={12} md={8} lg={8} xl={8}>
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    fullWidth
                                                    autoFocus
                                                    id="isno"
                                                    label="İş Numarasını Giriniz"
                                                    name="qr"
                                                    value={isno}
                                                    onChange={handleChange}
												/>
											</Grid>
											<Grid item xs={12} md={4} lg={4} xl={4}>
												<Button variant="contained" color="primary" className={classes.button} onClick={() => {
													console.log(isno)
													setFaceID(isno)
													}}>
													Gönder
												</Button>
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