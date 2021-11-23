import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Fab, TextField, Box } from "@mui/material";
import { Add } from "@mui/icons-material";

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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 3,
      }}
    >
      <TextField
        className="inputTask"
        sx={{ pr: 2 }}
        id="outlined-basic"
        label="enter todo item"
        variant="outlined"
        value={item}
        onChange={handleChange}
      />

      <Fab color="primary" size="small" aria-label="add" onClick={handleSubmit}>
        <Add />
      </Fab>
    </Box>
  );
};

export default CreateTask;
