

import React from "react";
import { useState,useRef  } from "react";
export default function Note(props) {
  const textAreaRef = useRef(null);
  const [noteObj, setNoteObj] = useState({
    title: props.title,
    content: props.content,
  });
  const handleClick = () => {
    props.onDelete(props.id);
  };

  const handleChangeForTitle = (event) => {
    console.log("title changing");
    setNoteObj((prevNote) => {
      return {
        ...prevNote,
        title: event.target.value,
      };
    });
    console.log(noteObj);

    props.onUpdate(props.id, noteObj);
  };
  function autoResize() {
    const textarea = textAreaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }
  const handleChangeForContent = (event) => {
    setNoteObj((prevNote) => {
      return {
        ...prevNote,
        content: event.target.value,
      };
    });
    props.onUpdate(props.id, noteObj);
    autoResize();
  };
  return (
    <div className="note">
      <input
        value={noteObj.title}
        onChange={handleChangeForTitle}
        className="note__title"
        size={noteObj.title.length}
      />

      <textarea
       ref={textAreaRef}
        value={noteObj.content}
        onChange={handleChangeForContent}
        className="note__content"
        size={noteObj.content.length}
      />

      <button onClick={handleClick}>Delete</button>
    </div>
  );
}









