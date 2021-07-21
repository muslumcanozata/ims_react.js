import React from "react";
import Title from "../../Title"
// MaterialUI
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const StokTakipTitle = () => {
    return (					
		<React.Fragment >
				<Grid container>
				<Grid item xs={12} md={6} lg={8} xl={8} style={{marginTop:'10px'}}>
					<Box flexGrow={1}>

					<Title >Stok Takip Ekranı</Title>
					</Box>
				</Grid>
				<Grid item style={{}} xs={12} md={6} lg={4} xl={4} >
					<Box display="flex" justifyContent="flex-end">
						<TextField id="outlined-search" label="SKU Giriniz" type="search" variant="outlined" />
					</Box>
				</Grid>
				</Grid>
		</React.Fragment>
	);
}

export default StokTakipTitle;