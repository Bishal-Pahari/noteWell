import React, { useEffect } from "react";

import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { useState } from "react";
import { auth,db } from "./firebase";
import { onValue, ref, set,get,child } from "firebase/database";

export default function App({profileURL,profileName,userId}) {



  const [notes, setNotes] = useState([]);
   
  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
 
  
  };
  useEffect(()=>{
    set(ref(db, 'users/' + userId), {
      notes:notes
    });
    
  });





  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

    useEffect(() => {
    onValue( ref(db, 'users/' + userId), (snapshot) => {
      const data = snapshot.val();
      if(data != null){
          setNotes( Object.values(data.notes));
      }
    });
  },[]);


  return (
    <div>
      <Header profileURL={profileURL} profileName={profileName}/>
      <CreateArea onAdd={addNote} />
      <div className="note-area">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>



      <Footer />
    </div>
  );
}
