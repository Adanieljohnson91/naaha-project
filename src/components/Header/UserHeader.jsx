import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import pic from "../../assets/images/Naaha.png"
import { withRouter } from 'react-router-dom';
import "./header.css";
import { Link } from 'react-router-dom'

 const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          opacity: .9,
          backgroundColor:"#012840"
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
          
          </IconButton>
          <Typography variant="h5" className={classes.title}>
           <img className="img-size" src={pic} alt=""/>
          </Typography>
        <Link to="/dashboard"> <Button color="inherit" type="button">Dashboard</Button></Link> 
        <Link to="/contacts"> <Button color="inherit" type="button">Contacts</Button></Link> 
        <Link to="/events"> <Button color="inherit" type="button">Events</Button></Link> 
        <Link to="/buckets"> <Button color="inherit" type="button">Buckets</Button></Link> 
          <Button color="inherit" type="button" onClick={handleLogout}>Log out</Button>
        </Toolbar>
      </AppBar>
    </div>
        </>
    )
}

export default withRouter(UserHeader);