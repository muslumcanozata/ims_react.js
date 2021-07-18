import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../../Title';


const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Deposits() {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <Title>Ürün Tutarı</Title>
            <Typography component="p" variant="h4">
                €&nbsp;3,024.00
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                1 Mart'tan itibaren
            </Typography>
            <div>
                {/* <Link color="primary" href="#" onClick={preventDefault}>
                    View balance
                </Link> */}
            </div>
        </React.Fragment>
    );
}