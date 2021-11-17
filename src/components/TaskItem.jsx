import React, { useState } from "react";

const TaskItem = (props) => {
  const [isDone, setDone] = useState(false);

  function handleCheckedChanged(event) {
    setDone(event.target.checked);
  }

  function handleDelete(event) {
    props.onDelete(props.taskName);
  }
  return (
    <div className="taskItem">
      <input type="checkbox" onChange={handleCheckedChanged} />
      <p className={`taskName ${isDone && "done"}`}> {props.taskName} </p>
      <button className="deleteTask" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
