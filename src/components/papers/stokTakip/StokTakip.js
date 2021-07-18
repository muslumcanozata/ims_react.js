import React from "react";
import Copyright from "../../Copyright";
import Title from "../../Title"
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
		{ field: 'SKU', headerName: 'SKU', width: 130 },
		{ field: 'stokAdet', headerName: 'Stok Adedi', width: 160 },
		{
			field: 'urunAdi',
			headerName: 'Ürün Adı',
			description: 'This column has a value getter and is not sortable.',
			width: 160,
		},
	];

	const rows = [
		{ id: 1, SKU: 11111, stokAdet: 10, urunAdi: 'Mont Small' },
		{ id: 2, SKU: 22222, stokAdet: 20, urunAdi: 'Mont Medium' },
		{ id: 3, SKU: 22223, stokAdet: 30, urunAdi: 'Mont Large' },
		{ id: 4, SKU: 22224, stokAdet: 40, urunAdi: 'Mont XL' },
		{ id: 5, SKU: 22225, stokAdet: 50, urunAdi: 'Mont XXL' },
		{ id: 6, SKU: 22226, stokAdet: 60, urunAdi: 'Mont XXXL' },
		{ id: 7, SKU: 22227, stokAdet: 70, urunAdi: 'T-Shirt Small' },
		{ id: 8, SKU: 22228, stokAdet: 80, urunAdi: 'T-Shirt Medium' },
		{ id: 9, SKU: 22229, stokAdet: 90, urunAdi: 'T-Shirt Large' },
	];

    return (
		<div>
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
			<Box pt={4}>
				<Copyright />
			</Box>
		</div>
	);
}

export default StokTakip;