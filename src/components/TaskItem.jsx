import React from "react";
import { Box } from "@mui/system";
import { IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
    <Box
      sx={{
        boxShadow: 3,
        display: "grid",
        gridTemplateColumns: "1fr 8fr 2fr",
        p: 1,
      }}
    >
      {/* <input type="checkbox" onChange={handleCheckedChanged} /> */}
      <Checkbox
        onChange={handleCheckedChanged}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Box
        sx={{
          textDecoration: `${props.isDone ? "line-through" : "none"}`,
          display: "flex",
          alignItems: "center",
          fontWeight: "500",
          fontSize: 20,
        }}
      >
        {props.taskName}
      </Box>
      <IconButton
        bgcolor="primary"
        color="secondary"
        aria-label="add"
        onClick={handleDelete}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default TaskItem;
