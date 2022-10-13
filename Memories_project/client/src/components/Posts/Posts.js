import React from 'react'
import {Grid, CircularProgress} from '@mui/material'
import { useSelector } from 'react-redux'
import Post from './Post/Post.js'

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  
  return ( !posts.length ? 
    <CircularProgress />
   : 
    <Grid
      className="containner"
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
