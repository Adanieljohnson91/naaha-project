
import React, { useState } from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LoginService from "../../services/loginService";
import pic from "../../assets/images/Naaha.png"
import "./login.css";


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

function LoginForm(props) {
  const [form, setForm] = useState({
    username: "",
    password: ""
  })
  const [potentialMatch, setPotentialMatch] = useState({});
  const noAccount = (e) => {
    props.switch();
  }
  const signIn = (e) => {
    if (potentialMatch === undefined) return
    if (potentialMatch.username === form.username && potentialMatch.password === form.password) {
      window.sessionStorage.setItem('credentials', JSON.stringify(potentialMatch))
      props.history.push('/dashboard')
    } else {
      alert('Wrong password')
      return
    }

  }
  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (e.target.name === "username") {
      let users = await LoginService.searchUsers(form.username)
      setPotentialMatch(users[0]);
    }
  }
  const classes = useStyles()
  return (
    <>
      <Container component="main" maxWidth="xs" className="login_form_container">
        <CssBaseline />
        <div className="login_border">
          <div className={classes.form}>
            <div className="img-margin">
              <img src={pic} alt="" />
            </div>
            <Typography component="h1" variant="h5">
              Sign in
        </Typography>
            <form className={classes.form} noValidate>
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
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                onClick={signIn}
                className={classes.submit}
              >
                Sign In
          </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
              </Link>
                </Grid>
                <Grid item>
                  <Link onClick={noAccount} variant="body2">
                    {"Don't have an account? Sign Up"}
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

export default LoginForm;