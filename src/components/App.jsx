import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  const [noteList, setTheArray] = useState(notes);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function createNote(note_info) {
    return (
      <Note
        key={note_info.key}
        id={note_info.key}
        title={note_info.title}
        content={note_info.content}
        onDelete={deleteNote}
      />
    );
  }

  function deleteNote(key) {
    setTheArray(noteList.filter((note) => note.key !== key));
  }

  function handleClick(event) {
    event.preventDefault();
    const newNote = {
      key: noteList.length + 1,
      title: event.target.elements.title.value,
      content: event.target.elements.content.value,
    };

    setTheArray([...noteList, newNote]);
    setTitle("");
    setContent("");
  }

  function updateTitle(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function updateContent(event) {
    const newContent = event.target.value;
    setContent(newContent);
  }

  return (
    <div>
      <Header />
      <div>
        <form onSubmit={handleClick}>
          <input
            name="title"
            onChange={updateTitle}
            placeholder="Title"
            value={title}
          />
          <textarea
            name="content"
            onChange={updateContent}
            placeholder="Take a note..."
            value={content}
            rows="3"
          ></textarea>
          <button>Add</button>
        </form>
      </div>
      {noteList.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
