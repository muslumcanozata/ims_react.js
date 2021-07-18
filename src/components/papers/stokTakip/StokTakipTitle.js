import React from "react";
import Title from "../../Title"
// MaterialUI
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const StokTakipTitle = () => {
    return (					
		<React.Fragment>
				<Grid container>
				<Grid item xs={12} md={6} lg={8} xl={8} style={{marginTop:'10px'}}>
					<Title >Stok Takip Ekranı</Title>
				</Grid>
				<Grid item style={{}} xs={12} md={6} lg={4} xl={4} >
					<TextField id="outlined-search" label="SKU Giriniz" type="search" variant="outlined" />
				</Grid>
				</Grid>
		</React.Fragment>
	);
}

export default StokTakipTitle;