import React, { useState } from "react";

import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch} from "react-redux"
import { createPost } from "../../actions/posts.js"
import "./Form.css"

const Form = () => {
    const [postData, setPostData] = useState({
        create: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(createPost(postData));
    };

    const clear = () => {

    }

  return (
    <Paper className="paper">
      <form
        autoComplete="off"
        noValidate
        className="form root"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating Your Memories</Typography>
        <TextField
          className="textfield"
          name="creators"
          variant="outlined"
          label="Creators"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          className="textfield"
          name="title"
          variant="outlined"
          label="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          className="textfield"
          name="message"
          variant="outlined"
          label="Message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          className="textfield"
          name="tags"
          variant="outlined"
          label="Tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className="fileInput">
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className="ButtonSubmit"
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >Submit</Button>

        <Button
          className="ButtonSubmit"
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
        >Claer</Button>
      </form>
    </Paper>
  );};

export default Form;
