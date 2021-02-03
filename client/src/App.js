import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { Posts } from './components/Posts/Posts';
import { Form } from './components/Form/Form';
import React from 'react';
import memories from './images/memories.png';
import useStyles from './styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/postsActions';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing="3"
          >
            <Grid item xs={12} sm={7}>
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
