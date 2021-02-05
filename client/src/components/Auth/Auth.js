import React from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlineIcon from '@material-ui/icons/LockOpenOutlined';

import useStyles from './styles';
import { Input } from './Input';
import { useState } from 'react';

export const Auth = () => {
  const [showPasword, setShowPasword] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = () => {};
  const handleShowPassword = () => {
    setShowPasword(!showPasword);
  };
  const switchMode = () => {
    setIsSignup(!isSignup);
    setShowPasword(false);
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
                  half
                ></Input>
                <Input
                  name="email"
                  label="Email Address"
                  handleChange={handleChange}
                  type="email"
                  half
                ></Input>
              </>
            )}
            {!isSignup && (
              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
              ></Input>
            )}
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
              type={showPasword ? 'text' : 'password'}
            ></Input>
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
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
