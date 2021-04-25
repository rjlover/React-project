import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Header from "./Header";
import Notes from "./Notes";

function App() {
  //this state create for storing all the notes in array and finnaly print in home page
  const [addItem, setAddItem] = useState([])

  //make this function for print the note in page and send it [createnote] component as a property [<CreateNote passNote={addNote}]
  const addNote = (note) => {
    setAddItem((preData) => {
      return [...preData, note]
    });
  };

  //make this function for delete the note in page and send it [notes] component as a property [<Notes delete={deleteNote}>]
  const deleteNote = (id) => {
    setAddItem((preData) => {
      return (preData.filter((currentNote, index) => {
        return index !== id;
      }))
    })
  }


  return (
    <React.Fragment>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (<Notes key={index} id={index} title={val.title} content={val.content} delete={deleteNote} />);
      })
      }
    </React.Fragment>
  );
}

export default App;
