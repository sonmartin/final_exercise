import React, { useState } from "react";
import "../todo/Todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

const Todo = ({ toggleTodo, task, completed, id, deleteTodo, editTodo }) => {
  const [edit, setEdit] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleEdit = (e) => {
    e.preventDefault();
    editTodo(id, editTask);
    setEdit(false);
  };

  return (
    <Grid className={completed === "true" ? "Todo completed" : "Todo"}>
      {edit ? (
        <Grid>
          <Box
            component="form"
            className="Todo-edit-form"
            onSubmit={handleEdit}
          >
            <input
              type="text"
              name="task"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
            <motion.button
              animate={{
                scale: [1, 0.2, 1, 1],
              }}
              transition={{
                duration: 1,
              }}
            >
              Lưu
            </motion.button>
          </Box>
        </Grid>
      ) : (
        <Grid key="nomarl" classNames="task-text">
          <li className="Todo-task" onClick={toggleTodo}>
            {task}
          </li>
        </Grid>
      )}

      <div className="Todo-buttons">
        <Button onClick={() => setEdit(true)}>
          <EditIcon sx={{ color: "black" }} />
        </Button>
        <Button onClick={deleteTodo}>
          <DeleteIcon sx={{ color: "black" }} />
        </Button>
      </div>
    </Grid>
  );
};

export default Todo;
