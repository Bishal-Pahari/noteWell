import React from "react";

export default function Note(props) {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1 contentEditable={true} style={{ outline: "none" }}>
        {props.title}
      </h1>
      <p contentEditable={true} style={{ outline: "none" }}>
        {props.content}
      </p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
