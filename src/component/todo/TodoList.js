import React, { useEffect, useState } from "react";
import TodoInput from "../todo/TodoInput";
import Todo from "../todo/Todo";
import "../todo/TodoList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  completeTodo,
  addTodo,
  deleteTodo,
  editTodo,
  getTodoAction,
} from "../../action/actionTodo";
import { Grid, Typography, Button, ButtonGroup } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logoutAction } from "../../action/action";
import { motion } from "framer-motion";

const TodoList = () => {
  const [filter, setFilter] = useState("all");

  const state = useSelector((state) => ({ ...state.todos }));
  
  let dispatch = useDispatch();
  const create = (todo) => {
    dispatch(addTodo(todo));
  };
  const edit = (id, editTask) => {
    dispatch(editTodo(id, editTask));
  };
  const handleLogout = () => {
    dispatch(logoutAction());
  };
  useEffect(() => {
    dispatch(getTodoAction());
  }, []);

  return (
    <div>
      <div className="TodoList">
        <Typography
          className="heading"
          variant="h3"
          align="left"
          sx={{ color: "#ece8ef" }}
        >
          Todo App
        </Typography>
        <Button
          sx={{ marginBottom: 3, marginTop: 2 }}
          type="submit"
          color="error"
          variant="contained"
          onClick={handleLogout}
        >
          Đăng Xuất
        </Button>
        <TodoInput createTodo={create} />
        <motion.div
          animate={{
            scale: [1, 0.2, 1, 1],
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <ButtonGroup
            variant="text"
            size="large"
            color="success"
            sx={{ marginTop: 3 }}
          >
            <Button
              sx={{ color: "white", background: "black" }}
              onClick={() => setFilter("all")}
            >
              Tất cả
            </Button>

            <Button
              sx={{ color: "white", background: "black" }}
              onClick={() => setFilter("completed")}
            >
              Đã hoàn thành
            </Button>
            <Button
              sx={{ color: "white", background: "black" }}
              onClick={() => setFilter("active")}
            >
              Chưa hoàn thành
            </Button>
          </ButtonGroup>
        </motion.div>

        <motion.ul
          animate={{
            scale: [1, 0.2, 1, 1],
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <Grid className="todolist">
            {state.todos && filter === "all"
              ? state.todos.map((todo) => {
                  return (
                    <Grid key={todo.id} classNames="todo">
                      <Typography align="center" sx={{ color: "white" }}>
                        {todo.date}
                      </Typography>
                      <Todo
                        key={todo.id}
                        id={todo.id}
                        task={todo.title}
                        completed={todo.status}
                        toggleTodo={() => dispatch(completeTodo(todo))}
                        deleteTodo={() => dispatch(deleteTodo(todo))}
                        editTodo={edit}
                      />
                    </Grid>
                  );
                })
              : null}

            {state.todos.length > 0 && filter === "completed"
              ? state.todos.map((todo) => {
                  return (
                    todo.status === "true" && (
                      <Grid>
                        <Typography align="center" sx={{ color: "white" }}>
                          {todo.date}
                        </Typography>
                        <Todo
                          key={todo.id}
                          item={todo}
                          task={todo.title}
                          completed={todo.status}
                          toggleTodo={() => dispatch(completeTodo(todo))}
                          deleteTodo={() => dispatch(deleteTodo(todo))}
                          editTodo={edit}
                        />
                      </Grid>
                    )
                  );
                })
              : null}
            {state.todos.length > 0 && filter === "active"
              ? state.todos.map((todo) => {
                  return (
                    todo.status === "false" && (
                      <Grid>
                        <Typography align="center" sx={{ color: "white" }}>
                          {todo.date}
                        </Typography>
                        <Todo
                          key={todo.id}
                          item={todo}
                          task={todo.title}
                          completed={todo.status}
                          toggleTodo={() => dispatch(completeTodo(todo))}
                          deleteTodo={() => dispatch(deleteTodo(todo))}
                          editTodo={edit}
                        />
                      </Grid>
                    )
                  );
                })
              : null}
          </Grid>
        </motion.ul>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default TodoList;
