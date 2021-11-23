import React, { useState } from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTask from "./components/CreateTask";
import TaskItem from "./components/TaskItem";
import { Box } from "@mui/material";

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
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "1fr 1fr 5fr 1fr",
        height: "100vh",
        bgcolor: "#e79f4cef",
      }}
    >
      <Header />
      <CreateTask onAddTask={onAddTask} />
      <Box sx={{ width: "50%", mx: "auto" }}>
        {items.map((task) => {
          return (
            <Box
              sx={{
                boxShadow: 2,
                bgcolor: "background.paper",
                borderRadius: 1,
                my: 2,
              }}
            >
              <TaskItem
                id={task.id}
                key={task.id}
                taskName={task.title}
                isDone={task.isDone}
                onDelete={deleteTask}
                onUpdate={onUpdateTask}
              />
            </Box>
          );
        })}
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
