import React from "react";
import Copyright from "./Copyright";
import StokTakipTitle from "./papers/stokTakip/StokTakipTitle"
import StokTakipDataGrid from "./papers/stokTakip/stokTakipDataGrid"
// MaterialUI
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(2),
	color: theme.palette.text.secondary,
	width: '1200px',
	maxWidth: 'calc(100% - 20px)'
  }));

const useStyles = makeStyles((theme) => ({
	root: {
		// display: 'flex',
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		// flexGrow: 1,
		// height: '100vh',
		// overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	paper: {
		padding: theme.spacing(2),
		// display: 'flex',
		// overflow: 'auto',
		// flexDirection: 'column',
	},
	fixedHeight: {
		// height: '%100',
	},
}));


const StokTakip = () => {
	const classes = useStyles();

  	return (
		<div className={classes.root}>
			<CssBaseline />
			<main className={classes.content}>
			  	<div className={classes.appBarSpacer} />
			  	<Container className={classes.container}>
					<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={3}>
						{/* StokTakip Title */}
						<Grid item xs={12}>
							<Item>
                                <StokTakipTitle/>
							</Item>
						</Grid>
						{/* Data Grid */}
						<Grid item xs={12}>
							<Item align="center">
								<StokTakipDataGrid/>
							</Item>
						</Grid>
					</Grid>
					</Box>
					<Box pt={4}>
						<Copyright />
					</Box>
			  </Container>
			</main>
    	</div>
	);
};

export default StokTakip;
