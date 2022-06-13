import { Box, TextField, Form, Grid, Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import "../todo/TodoInput.css";


const TodoInput = ({ createTodo, todo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(task);
    setTask("");
  };

  return (
    <>
      <Box component="form" className="TodoInput" onSubmit={handleSubmit}>
        <TextField
          sx={{ width: 600 }}
          type="text"
          variant="standard"
          color="success"
          placeholder="Nhập vào đi bấy bì..."
          id="task"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Thêm</button>
      </Box>
    </>
  );
};

export default TodoInput;
