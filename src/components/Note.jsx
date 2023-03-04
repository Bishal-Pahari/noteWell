import React from "react";
import { useState } from "react";
export default function Note(props) {
  const [noteObj, setNoteObj] = useState({
    title:props.title,
    content:props.content
  });
  const handleClick = () => {
    props.onDelete(props.id);
  };

  const handleChangeForTitle =(event)=>{
    console.log("title changing")
    setNoteObj((prevNote)=>{
      return(
        {
          ...prevNote,
          title: event.target.value
        }
      )
    });
    console.log(noteObj);

     props.onUpdate(props.id,noteObj);
  }

  const handleChangeForContent =(event)=>{
    setNoteObj((prevNote)=>{
      return(
        {
          ...prevNote,
          content: event.target.value
        }
      )
    });
    props.onUpdate(props.id,noteObj);
  }
  return (
    <div className="note">
      <input value={noteObj.title}  onChange={handleChangeForTitle} className="note__title"/>
      
      <input value={noteObj.content}  onChange={handleChangeForContent} className="note__content"/>
      
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

