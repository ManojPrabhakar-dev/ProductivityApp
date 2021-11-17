import React, { useState } from "react";

const CreateTask = (props) => {
  const [item, setItem] = useState("");

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleSubmit(event) {
    props.onAddTask(item);
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
