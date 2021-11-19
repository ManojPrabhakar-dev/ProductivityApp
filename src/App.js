import React, { useState } from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTask from "./components/CreateTask";
import TaskItem from "./components/TaskItem";

function App() {
  const [items, setItem] = useState([]);

  function onAddTask(_item) {
    setItem([...items, _item]);
  }

  function onUpdateTask(_item) {
    // let item = items.findIndex((item) => item.title === _item.title);
    // items[item].isDone = _item.isDone;

    let item = items.find((item) => item.id === _item.id);
    item.isDone = _item.isDone;

    setItem([...items]);
  }

  function deleteTask(_id) {
    let newItems = items.filter((item) => item.id !== _id);
    setItem([...newItems]);
  }

  return (
    <div className="App">
      <Header />
      <CreateTask onAddTask={onAddTask} />
      <div className="container">
        {items.map((task) => {
          return (
            <TaskItem
              id={task.id}
              key={task.id}
              taskName={task.title}
              isDone={task.isDone}
              onDelete={deleteTask}
              onUpdate={onUpdateTask}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
