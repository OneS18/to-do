import React, { useState, useReducer, useEffect } from "react";
import "./task.css";
import Todos from "../Todos/todos";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reduce(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, completed: false };
}

const Task = () => {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reduce, []);

  useEffect(() => {});

  function handleSubmit(e, todo) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
    if (name === "") {
      return alert("please write a todo");
    }
  }

  //   console.log(handleSubmit);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          placeholder="Add a task..."
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {todos.map((todo) => {
        return <Todos key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default Task;
