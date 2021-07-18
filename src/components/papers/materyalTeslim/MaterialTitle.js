import React from "react";
import Title from "../../Title"
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		overflow: 'auto',
		flexDirection: 'column',
	},
}));


const MaterialTitle = () => {
	const classes = useStyles();

    return (
        <React.Fragment>
                <Title>Bekleyen Siparişler</Title>
        </React.Fragment>
	);
}

export default MaterialTitle;