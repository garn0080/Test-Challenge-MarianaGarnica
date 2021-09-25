import { TextareaAutosize } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Fab from "@mui/material/Fab";
import React from "react";
import "./CreateNote.css";

function CreateNote() {
  function postNote(item) {
    console.log(item);
  }

  // Form
  return (
    <div>
      <form className="createNoteForm">
        <input type="text" placeholder="Name" name="Name" />
        <input type="text" placeholder="Email" name="Email" />
        <div className="content">
          <TextareaAutosize
            className="textArea"
            name="thought"
            placeholder="Write a new note"
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
