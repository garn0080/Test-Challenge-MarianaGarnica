import { TextareaAutosize } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Fab from "@mui/material/Fab";
import React, {useState} from "react";
import "./CreateNote.css";
import cuid from 'cuid';

function CreateNote({allPosts, setAllPost}) {
  
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [text, setText] = useState()
  
  const handleName = (input) => {
    setName(input.target.value)
  }

  const handleEmail = (input) => {
    setEmail(input.target.value)
  }

  const handleText = (input) => {
    setText(input.target.value)
  }


  // creating post object
  function postNote() {

    // Save current post in AllPosts list
    setAllPost([
      ...allPosts,
      {id: cuid(), userName: name, userEmail: email, userText: text}
    ])

    // clear form
    setName("")
    setEmail("")
    setText("")
  }

 

  // Post Creation Form
  return (
    <div>
      <form className="createNoteForm">
        <input onChange={handleName} value={name} type="text" placeholder="name" name="name" />
        <input onChange={handleEmail} value={email} type="text" placeholder="email" name="email" />
        <div className="content">
          <TextareaAutosize
            className="textArea"
            name="thought"
            placeholder="Write a new note"
            onChange={handleText}
            value={text}
          />
          <Fab
            onClick={postNote}
            id="postBtn"
            size="small"
            color="primary"
            aria-label="add"
          >
            <SendIcon />
          </Fab>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
