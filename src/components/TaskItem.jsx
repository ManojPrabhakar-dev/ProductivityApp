import React from "react";

const TaskItem = (props) => {
  // const [isDone, setDone] = useState(false);

  function handleCheckedChanged(event) {
    // setDone(event.target.checked);
    props.onUpdate({ id: props.id, isDone: event.target.checked });
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="taskItem">
      <div className="taskCheck">
        <input type="checkbox" onChange={handleCheckedChanged} />
      </div>
      <p className={`taskName ${props.isDone && "done"}`}> {props.taskName} </p>
      <button className="deleteTask" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
