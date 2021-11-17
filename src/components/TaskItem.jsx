import React from "react";

const TaskItem = (props) => {
  function handleDelete(event) {
    props.onDelete(props.taskName);
  }
  return (
    <div className="taskItem">
      <p className="taskName"> {props.taskName} </p>
      <button className="deleteTask" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
