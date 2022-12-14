import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from 'react-redux'
import './styles.css'

import { getPosts } from './actions/posts.js';
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    },[])

    return (
      <Container maxwidth="1g">
        <AppBar className="appbar" position="static" color="inherit">
          <Typography className="heading" variant="h2" align="center">
            Memories 
            <img className="image" src={memories} alt="memories" height="60" />
          </Typography>
        </AppBar>
        <Grow in>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
                <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form />
            </Grid>
          </Grid>
        </Grow>
      </Container>
    );
}

export default App;