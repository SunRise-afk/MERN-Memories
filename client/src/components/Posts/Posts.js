import { CircularProgress, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Post } from './Post/Post';
import React from 'react';
import useStyles from './styles';

export const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  return !posts.length ? (
    <CircularProgress color='secondary'></CircularProgress>
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => {
        return (
          <Grid key={post.id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId}></Post>
          </Grid>
        );
      })}
    </Grid>
  );
};
