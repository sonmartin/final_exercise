import "./App.css";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Private from "./routes/Private";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import TodoList from "./component/todo/TodoList";

import { useState, useEffect } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/todo" element={<Private Component={TodoList} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
