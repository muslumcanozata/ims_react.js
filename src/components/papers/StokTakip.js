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
import { DataGrid } from '@material-ui/data-grid';
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
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
}));


const StokTakip = () => {
	const classes = useStyles();

	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'firstName', headerName: 'First name', width: 130 },
		{ field: 'lastName', headerName: 'Last name', width: 130 },
		{
		  field: 'age',
		  headerName: 'Age',
		  type: 'number',
		  width: 90,
		},
		{
			field: 'fullName',
			headerName: 'Full name',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 160,
			valueGetter: (params) =>
				`${params.getValue(params.id, 'firstName') || ''} ${
				params.getValue(params.id, 'lastName') || ''
				}`,
		},
	];

	const rows = [
		{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
		{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
		{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
		{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
		{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
		{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
		{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
		{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
		{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
	];

    return (
		<div className={classes.root}>
			<div className={classes.content}>
			  	<div className={classes.appBarSpacer} />
			  	<Container className={classes.container}>
						<Grid item>
						{/*Accordion*/}						
								<React.Fragment>
									<div style={{}}>
									<Paper className={classes.paper}>
										<Grid container>
										<Grid item xs={12} md={6} lg={8} xl={8} style={{marginTop:'10px'}}>
											<Title >Stok Takip Ekranı</Title>
										</Grid>
										<Grid item style={{}} xs={12} md={6} lg={4} xl={4} >
											<TextField id="outlined-search" label="SKU Giriniz" type="search" variant="outlined" />
										</Grid>
										</Grid>
									</Paper >
									</div>
									<div style={{marginTop: '20px'}}>
										<Paper className={classes.paper}>
											<div style={{ height: 400, width: '100%' }}>
												<DataGrid
													rows={rows}
													columns={columns}
													pageSize={5}
													checkboxSelection
													disableSelectionOnClick
												/>
											</div>
										</Paper>
									</div>
								</React.Fragment>
						</Grid>
					<Box pt={4}>
						<Copyright />
					</Box>
			  </Container>
			</div>
    	</div>
	);
}

export default StokTakip;