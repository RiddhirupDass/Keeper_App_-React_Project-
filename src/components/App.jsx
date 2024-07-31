import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function toDelete(id) {
    setNotes((prevState) => {
      return prevState.filter((note, index) => {
        return index != id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea setter={setNotes} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            delete={toDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
