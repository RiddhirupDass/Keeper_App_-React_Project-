import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [expandState, setExpandState] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    if (name === "title") {
      setNote((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    } else if (name === "content") {
      setNote((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  }
  function handleClick(event) {
    event.preventDefault();
    props.setter((prevState) => {
      return [...prevState, note];
    });
  }
  function expansion() {
    setExpandState(true);
    console.log(expandState);
  }

  return (
    <div>
      <form className="create-note">
        {expandState && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expansion}
          placeholder="Take a note..."
          value={note.content}
          rows={expandState ? 3 : 1}
        />
        {expandState && (
          <Zoom in="true">
            <Fab onClick={handleClick}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
