import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LoginContext from '../../contexts/login/loginContext';

function Copyright() {
    return (
     	<Typography variant="body2" color="textSecondary" align="center">
        	{'© '}
        	<Link color="inherit" href="http://localhost:3000/">
          	Industrial Material Delivery System
        	</Link>{' '}
        	{new Date().getFullYear()}
        	{'.'}
      	</Typography>
    );
}

function randomPic() {
	var min = 1;
	var max = 16;
	var rand =  Math.floor(min + (Math.random() * (max-min)));
	return ('/imgs/bg'+ rand + '.jpg')
}


const useStyles = makeStyles((theme) => ({
	root: {
	  	height: '100vh',
	},
	image: {
	  	backgroundImage: `url(${process.env.PUBLIC_URL + randomPic()})`,
	  	backgroundRepeat: 'no-repeat',
	  	backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
	  	backgroundSize: 'cover',
	  	backgroundPosition: 'center',
	},
	paper: {
	  	margin: theme.spacing(8, 4),
	  	display: 'flex',
	  	flexDirection: 'column',
	  	alignItems: 'center',
	},
	avatar: {
	  	margin: theme.spacing(1),
	  	backgroundColor: theme.palette.secondary.main,
	},
	form: {
	  	width: '100%', // Fix IE 11 issue.
	  	marginTop: theme.spacing(1),
	},
	submit: {
	  	margin: theme.spacing(3, 0, 2),
	},
  	})
);



const LoginScreen = () => {
	const classes = useStyles();

	const { username, password, handleLogin, handleLoginChange, isLogin } = useContext(LoginContext);

	if (isLogin) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Grid container component="main" className={classes.root}>
		  	<CssBaseline />
			  	<Grid item xs={false} sm={4} md={7} className={classes.image} />
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<div className={classes.paper}>
			  			<Avatar variant="rounded" className={classes.avatar}>
							<i class="fas fa-dolly"></i>
			  			</Avatar>
			  			<Typography component="h1" variant="h5">
							Oturum Aç
			  			</Typography>
						<form onSubmit={(e) => handleLogin(e, {
							username: username,
							password: password
						})} className={classes.form} noValidate>
							<TextField
								onChange={handleLoginChange}
								value={username}
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="username"
								label="İş Numarası"
								name="username"
								autoComplete="username"
								autoFocus
							/>
							<TextField
								onChange={handleLoginChange}
								value={password}
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
				  				Giriş Yap
							</Button>
							<Box mt={5}>
				  				<Copyright />
							</Box>
			  			</form>
					</div>
				</Grid>
		</Grid>
	);
}

export default LoginScreen;

