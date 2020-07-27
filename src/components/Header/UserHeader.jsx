import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';

 const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          opacity: 0.8
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
          color: 50
        },
      }));

const UserHeader = (props) =>{
    const classes = useStyles();
   const handleLogout = () =>{
       console.log("Clicked Logout")
       window.sessionStorage.clear();
       props.history.push('/login')
   }

    return (
        <>
    <div className={classes.root}>
      <AppBar position="fixed" >
        <Toolbar className={classes.root}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Welcome
          </Typography>
          <Button color="inherit" type="button" onClick={handleLogout}>Log out</Button>
        </Toolbar>
      </AppBar>
    </div>
        </>
    )
}

export default withRouter(UserHeader);