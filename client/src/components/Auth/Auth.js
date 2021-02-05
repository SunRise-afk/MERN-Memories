import React from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { Input } from './Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  authActionCreator,
  signUpActionCreator,
  signInActionCreator,
} from '../../actions/authActions';
import LockOutlineIcon from '@material-ui/icons/LockOpenOutlined';
import useStyles from './styles';
import Icon from './Icon';

export const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signUpActionCreator(formData, history));
    } else {
      dispatch(signInActionCreator(formData, history));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const switchMode = () => {
    setIsSignup(!isSignup);
    setShowPassword(false);
  };
  const googleSucess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch(authActionCreator({ result, token }));
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log('Google Sign in was unsuccessful');
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlineIcon></LockOutlineIcon>
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  label="First Name"
                  name="firstName"
                  handleChange={handleChange}
                  value={formData.firstName}
                  half
                ></Input>
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  value={formData.lastName}
                  half
                ></Input>
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              value={formData.email}
              type="email"
            ></Input>
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
              value={formData.password}
              type={showPassword ? 'text' : 'password'}
            ></Input>
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                value={formData.confirmPassword}
                type="password"
              ></Input>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            color="primary"
          >
            {isSignup ? 'Sing up' : 'Sign in'}
          </Button>
          <GoogleLogin
            clientId="214262667636-oh00g295f5v7g6olppbb2t0ggggk0uf5.apps.googleusercontent.com"
            render={(renderProps) => {
              return (
                <Button
                  fullWidth
                  className={classes.googleButton}
                  color="primary"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<Icon />}
                  variant="contained"
                >
                  Sign in with Google
                </Button>
              );
            }}
            onSuccess={googleSucess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          ></GoogleLogin>
          <Grid container justify="flex-end">
            <Button onClick={switchMode} color="secondary">
              {isSignup
                ? 'Already have an account? Sign In'
                : `Don't have an account? Sign Up`}
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
