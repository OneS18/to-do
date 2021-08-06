import React from "react";
import "./todo.css";
import logo from "../../svg/logo.svg";
// import woods from "../img/woods1.jpg";
import Task from "../Task/Task";

const Todo = () => {
  return (
    <header>
      <div className="container">
        <h1 className="title">To Do</h1>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="task-container">
        <Task />
      </div>
    </header>
  );
};

export default Todo;
