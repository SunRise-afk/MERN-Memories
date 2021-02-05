import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/postsActions';
import { useEffect } from 'react';
import React from 'react';
import FileBase from 'react-file-base64';
import useStyles from './styles';

export const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);
  const clearHandler = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updatePost(currentId, {
          ...postData,
          creatorName: user?.result?.name,
        })
      );
    } else {
      dispatch(
        createPost({
          ...postData,
          tags: postData.tags.split(', '),
          creatorName: user?.result?.name,
        })
      );
    }
    clearHandler();
  };
  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like others memories
        </Typography>
      </Paper>
    );
  }
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        className={`${classes.root} ${classes.form}`}
      >
        <Typography variant="h6">
          {currentId ? 'Editing' : 'Creating'} a memory
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => {
            setPostData((state) => {
              return { ...state, title: e.target.value };
            });
          }}
        ></TextField>
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => {
            setPostData((state) => {
              return { ...state, message: e.target.value };
            });
          }}
        ></TextField>
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => {
            setPostData((state) => {
              return { ...state, tags: e.target.value };
            });
          }}
        ></TextField>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData((state) => ({ ...state, selectedFile: base64 }))
            }
          ></FileBase>
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clearHandler}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
