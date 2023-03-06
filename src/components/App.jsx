import React, { useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { useState } from "react";
import { auth, db } from "./firebase";
import { onValue, ref, set, get, child } from "firebase/database";

export default function App({ profileURL, profileName, userId }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notesRef = ref(db, `users/${userId}/notes`);
    onValue(notesRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setNotes(Object.values(data));
      }
    });
  }, [userId]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, {...newNote, id: Date.now()}];
      // Update Firebase with the new note
      set(ref(db, `users/${userId}/notes`), updatedNotes);
      return updatedNotes;
    });
  };
  
  const deleteNote = (id) => { // Use id instead of index
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((noteItem) => { // Use note object instead of index
        return noteItem.id !== id; // Use id instead of index
      });
      // Update Firebase with the updated notes list
      set(ref(db, `users/${userId}/notes`), updatedNotes);
      return updatedNotes;
    });
  };
  const updateNote = (id, updatedNote) => {
    setNotes((prevNotes) => {
      const updatedNotes = notes.map((noteItem, index) => {
        if ( noteItem.id  == id) {
          return updatedNote;
        } else {
          return noteItem;
        }
      });
      set(ref(db, `users/${userId}/notes`), updatedNotes);
      return(updatedNotes);
    });
  };

  return (
    <div>
      <CreateArea onAdd={addNote} />
      <div className="note-area">
        {notes.map((noteItem, index) => {
          return (
            <Note
            key={noteItem.id}
            id={noteItem.id} 
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onUpdate={updateNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
