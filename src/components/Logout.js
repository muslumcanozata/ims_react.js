import React, { useContext, useEffect, useRef, useState } from 'react';
import LoginContext from '../contexts/login/loginContext';
import clsx from 'clsx';
//Material-UI
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { deepOrange } from '@material-ui/core/colors';
import { TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  paperPopover: {
    marginTop: theme.spacing(2),
  },
  popper: {
    padding: theme.spacing(2),
  },
	buttonText: {
		textTransform: 'none',
		color: '#eceff1',
	},
	small: {
    // width: theme.spacing(4),
    // height: theme.spacing(4),
		marginRight: theme.spacing(1)
  },
	orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  hosgeldin: {
    margin: theme.spacing(2),
    color: '#3f51b5'
  }
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
	const { firstName, lastName, handleLogout } = useContext(LoginContext);

	const fixedAvatarClass = clsx(classes.orange, classes.small);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

	const firstLetter = firstName.slice(0,1);
	console.log(firstName);
	console.log(firstLetter);

  return (
    <div className={classes.root}>
      {/* <Paper className={classes.paper}>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Çıkış Yap</MenuItem>
        </MenuList>
      </Paper> */}
      {/* <div> */}
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
					className={classes.buttonText}
        >
					<i class="fas fa-user fa-lg"></i>  &nbsp;
							{/* <Avatar alt="Remy Sharp" className={fixedAvatarClass}>
								{firstLetter}
							</Avatar> */}
									{open ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition className={classes.popper}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={classes.paperPopover}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <Typography className={classes.hosgeldin}>{firstName} {lastName} </Typography>
                    <MenuItem onClick={handleLogout}>Çıkış</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      {/* </div> */}
    </div>
  );
}
