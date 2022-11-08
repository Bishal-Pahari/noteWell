import React from "react";
import { useState } from "react";

const CreateArea = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

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
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
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
