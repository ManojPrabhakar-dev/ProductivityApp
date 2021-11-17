import React, { useState } from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTask from "./components/CreateTask";
import TaskItem from "./components/TaskItem";

function App() {
  const [items, setItem] = useState([]); //{ title: "", description: "" }

  function onAddTask(_item) {
    setItem([...items, _item]);
  }

  function deleteTask(_item) {
    let newItems = items.filter((item) => _item !== item);
    setItem([...newItems]);
  }

  return (
    <div className="App">
      <Header />
      <CreateTask onAddTask={onAddTask} />
      <div className="container">
        {items.map((task, idx) => {
          return (
            <TaskItem
              id={idx}
              key={idx}
              taskName={task}
              onDelete={deleteTask}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
