import React, { useState } from "react";
import ToDoItem from "./toDoItem";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);


  function handlechange(event) {
    const newValue = event.target.value;

    setInputText(newValue);
  }
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

 

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={inputText} type="text" onChange={handlechange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div >
        <ul>
          {items.map((singleItem) => {
            return (
              <ToDoItem
            
                text={singleItem}
                key={Math.random()}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
