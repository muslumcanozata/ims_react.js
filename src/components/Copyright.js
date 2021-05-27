import React from 'react'
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';


const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
           {'© '}
           <Link color="inherit" href="http://localhost:3000/">
                 Industrial Material Delivery System
           </Link>
           {' '}
           {new Date().getFullYear()}
           {'.'}
         </Typography>
   );
}

export default Copyright;
