import React from "react";
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		overflow: 'auto',
		flexDirection: 'column',
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


const MaterialAccordion = () => {
	const classes = useStyles();

    return (
        <React.Fragment>
            <Grid>
                <Grid item>
                    <Accordion  style={{marginTop: '3px'}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <Typography className={classes.heading}>77777-43684</Typography>
                            <Typography className={classes.secondaryHeading}>Süleyman Çamurlu</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid item xs={12} md={4} lg={4} xl={4}>
                                <i class="fas fa-mars fa-lg"> : Süleyman Çamurlu</i>
                                <div className={{marginTop: '50px'}}> 
                                    <i class="fas fa-phone-square-alt fa-lg"> : 536 637 6862</i>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} xl={4}>
                                <i class="fas fa-user-shield fa-lg"> : 77777</i>
                                <div className={{marginTop: '50px'}}> 
                                    <i class="fas fa-users fa-lg mt-5 "> : Pres</i>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} xl={4}>
                                <i class="fas fa-id-card fa-lg"> : 0974280964</i>
                                <div className={{marginTop: '50px'}}> 
                                    <Button onClick={() => {}} 	variant="contained" color="primary" 		
                                    >
                                        Teslim Et
                                    </Button>
                                </div>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item >
                    <Accordion style={{marginTop: '3px'}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Accordion 2</Typography>
                            <Typography className={classes.secondaryHeading}>Süleyman Çamurlu</Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </React.Fragment>
	);
}

export default MaterialAccordion;