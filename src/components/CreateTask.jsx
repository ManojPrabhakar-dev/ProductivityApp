import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const CreateTask = (props) => {
  const [item, setItem] = useState("");

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleSubmit(event) {
    props.onAddTask({ id: uuid(), title: item, isDone: false });
    setItem("");
    event.preventDefault();
  }

  return (
    <div className="createTask py-1">
      <input
        className="inputTask"
        value={item}
        onChange={handleChange}
        placeholder="enter todo item"
      ></input>
      <button className="addTask" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default CreateTask;
