import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Title from "../Title"
import RFIDContext from "../../contexts/rfid/rfidContext";
// MaterialUI
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		display: 'flex',
// 	},
// 	title: {
// 		flexGrow: 1,
// 	},
// 	appBarSpacer: theme.mixins.toolbar,
// 	content: {
// 		flexGrow: 1,
// 		height: '100vh',
// 		overflow: 'auto',
// 	},
// 	container: {
// 		paddingTop: theme.spacing(4),
// 		paddingBottom: theme.spacing(4),
// 	},
// 	paper: {
// 		padding: theme.spacing(2),
// 		display: 'flex',
// 		overflow: 'auto',
// 		flexDirection: 'column',
// 		width: 1500
// 	},
// 	fixedHeight: {
// 		height: 500,
// 	},
// 	tanimaPaper: {
//  		height: 120,
// 	},
// }));


const EmployeeDetails = () => {
	// const classes = useStyles();
	const history = useHistory();

	const { rfid, isno, tel, isim, soyisim, cinsiyet, grup, mudurluk, handleOut } = useContext(RFIDContext)

	console.log(cinsiyet)
	// isno: [],
	// email: '',
	// isim: '',
	// soyisim: '',
	// tel: '',
	// rfid: '',
	// grup: '',
	// qr: '',
	// cinsiyet: '',
    return (
		<React.Fragment>
			<Title>Personel Bilgileri</Title>
				<Grid container spacing={3}>
					<Grid item xs={12} md={4} lg={4} xl={4}>
						{(cinsiyet === "E" ? (<i class="fas fa-mars fa-lg"> : {isim} {soyisim}</i>) : (<i class="fas fa-venus fa-lg">: {isim} {soyisim}</i>))}
						<div style={{margin: '20px'}}></div>
						<i class="fas fa-phone-square-alt fa-lg"> : {tel}</i>
					</Grid>
					<Grid item xs={12} md={4} lg={4} xl={4}>
						<i class="fas fa-user-shield fa-lg"> : {isno}</i>
						<div style={{margin: '20px'}}></div>
						<i class="fas fa-users fa-lg"> : {mudurluk} / {grup}</i>
					</Grid>
					<Grid item xs={12} md={4} lg={4} xl={4}>
						<i class="fas fa-id-card fa-lg"> : {rfid}</i>
						<div style={{margin: '15px'}}></div>
						<Button onClick={() => {		
								handleOut();
								history.push(`/urunteslim/`)}
							}
							variant="contained" 
							color="secondary" 
						>
							Çıkış
						</Button>
					</Grid>
					{/* <button onClick={goBack()}>OUT</button> */}
				</Grid>
		</React.Fragment>
	);
}

export default EmployeeDetails;