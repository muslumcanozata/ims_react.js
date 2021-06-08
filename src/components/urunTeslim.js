import React, { useEffect, useState } from "react";
import Copyright from "./Copyright";
// MaterialUI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AvailableProductsTable from "./papers/availableProductsTable";
import EmployeeDetails from "./papers/EmployeeDetails";
import Basket from "./papers/basket";

const drawerWidth = 240;

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
		height: '%100',
	},
}));


const UrunTeslim = () => {
	//AVAILABLE PRODUCTTAN ALD IĞIN DATAYI STATE TE TUT VE BASKET'E YOLLA
	const [basketData, setBasketData] = useState([]);

	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	//AVAILABLE PRODUCTTAN ALDIĞIN DATAYI STATE TE TUT VE BASKET'E YOLLA

  	return (
		<div className={classes.root}>
			<CssBaseline />
			<main className={classes.content}>
			  	<div className={classes.appBarSpacer} />
			  	<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						{/* Personel */}
						<Grid item xs={12} md={12} lg={12}>
							<Paper className={classes.paper}>
                                <EmployeeDetails />
							</Paper>
						</Grid>
						{/* Alınabilecek Ürünler */}
						<Grid item xs={12} md={12} lg={12}>
							<Paper className={classes.paper}>
                                <AvailableProductsTable basketData={basketData} setBasketData={setBasketData}/>
							</Paper>
						</Grid>
						{/* Sepet */}
						<Grid item xs={12} md={12} lg={12}>
							<Paper className={classes.paper}>
								{/*Basket Datayı Props Olarak Ver ve Renderla*/} 
                                <Basket basketData={basketData} setBasketData={setBasketData}/>
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

export default UrunTeslim;
