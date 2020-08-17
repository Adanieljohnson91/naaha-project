import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Register from "../../services/registerService";
import "./register.css";
import pic from "../../assets/images/Naaha.png"


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
}));

function RegisterForm(props) {
  const [form, setForm] = useState({
    username:"",
    password:"",
    confirmpassword:"",
    full_name:"",
    email:"",
    phone:""
  })
  const noAccount = (e) =>{
      props.switch();
  }
  const register = async (e) =>{
    let newUser = {...form};
    delete newUser.confirmpassword;
    await Register.registerUser(newUser);
    setForm({...form,  username:"",
    password:"",
    confirmpassword:"",
    full_name:"",
    email:"",
    phone:""})
    props.switch();
  }
  const handleChange = (e) =>{
    setForm({...form, [e.target.name]:e.target.value})
  }
  const classes = useStyles()
  return (
    <>
    
  <Container component="main" maxWidth="xs" className="">
      <CssBaseline />
      <div className="border">
      <div className={classes.form}>
      <div className="img-margin">
<img src={pic} alt=""/>
</div>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="full_name"
            label="Name"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            autoComplete="fullname"
            autoFocus
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            autoComplete="username"
          
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            autoComplete="password"
           
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            id="confirmpassword"
            label="Confirm Password"
            name="confirmpassword"
            value={form.confirmpassword}
            onChange={handleChange}
            autoComplete="password"
          
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone number"
            type="phone"
            id="phone"
            value={form.phone}
            onChange={handleChange}
            autoComplete="phone"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Agree to terms"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={register}
            className={classes.submit}
          >
            Join
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={noAccount} variant="body2">
                {"Have a login?"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      </div>
      <Box mt={8}>
       
      </Box>
    </Container>
  )
    </>
  );
}

export default RegisterForm;