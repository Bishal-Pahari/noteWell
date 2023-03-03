import React from "react";
import { useState } from "react";

import {app,db,auth} from './firebase';
import {addDoc,collection} from 'firebase/firestore';

const CreateArea = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [notesLibrary,setNotesLibrary]=useState([]);


  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  // const notesCollectionRef = collection(db,"notes");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    if (!note.content) {
      showNotification("Title and content cannot be empty!");

      event.preventDefault();
    } else {
      props.onAdd(note);
      setNote({ title: "", content: "" });
      event.preventDefault();
    }
  };

  const showNotification = (message) => {
    // check if browser supports notifications
    if (!("Notification" in window)) {
      alert("content cannot be empty!");
    } else if (Notification.permission === "granted") {
      new Notification(message);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          new Notification(message);
        }
      });
    }
  };

  const expand = () => {
    setIsExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
