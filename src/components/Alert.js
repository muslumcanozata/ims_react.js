import React, { useContext } from 'react'
import AlertContext from '../contexts/alert/alertContext';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    root1: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    }
}))

const Alert1 = () => {
    const classes = useStyles();
    console.log("alert.js")
    const { alert } = useContext(AlertContext)

    const [open, setOpen] = React.useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    return(
        alert !== null && (
        <div >
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert severity={alert.type}>
                    {alert.msg}
                </Alert>
            </Snackbar>
        </div>))
    
}

export default Alert1;
