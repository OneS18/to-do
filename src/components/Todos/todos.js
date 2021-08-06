import React, { useEffect } from "react";
import { ACTIONS } from "../Task/Task";
import "./todos.css";

// function todoLenght(todo) {
//   if (todo.length > 5) {
//     console.log("make sure you do all tasks");
//   }
// }

const Todos = ({ todo, dispatch }) => {
  useEffect(() => {
    // todoLenght();
  });
  return (
    <div className="container-todos">
      <span>
        {todo.completed ? (
          <span>Delete This</span>
        ) : (
          <h4 className="todotask">{todo.name}</h4>
        )}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Done
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todos;
