import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Post } from './Post/Post';
import useStyles from './styles';

export const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <CircularProgress></CircularProgress>
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
