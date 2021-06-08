import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    '& > * + *': {
        marginTop: theme.spacing(2),
      },
    position: 'absolute',
    left: '50%',
    top: '35%',
    zIndex: '1000',
    height: '100px',
    width: '100px'
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}