import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function isDoneHandler() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div onClick={isDoneHandler}>
      <li
        style={{ textDecoration: isDone ? "line-through" : "none" }}
        key={Math.random()}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
