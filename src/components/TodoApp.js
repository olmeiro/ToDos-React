import React, { useEffect, useReducer } from "react";

import { todoReducer } from "./todoReducer";
import useForm from "../hooks/useForm";

import "./style.css";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     desc: "Aprender React",
//     done: false,
//   },
// ];

const init = () => {
  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: "Aprender React",
  //     done: false,
  //   },
  // ];

  let lc = null;
  if (typeof window !== "undefined") {
    lc = localStorage.getItem("todos");
  }

  return JSON.parse(lc) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  // console.log(todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    console.log(todoId);

    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);

  };

  const handleToogle = (todoId) => {
    console.log(todoId);

    dispatch({
      type: 'toogle',
      payload: todoId
    });
  }

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }

  return (
    <div>
      <h1>App ToDo's</h1>
      <hr />

      <div className="container overflow-hidden">
        <div className="row">
          <div className="col-7">
            <h1>Todos ({todos.length})</h1>
            <TodoList
              todos={todos}
              handleToogle={handleToogle}
              handleDelete={handleDelete}
            />
          </div>
          <div className="col-5">
            <TodoAdd
              handleAddTodo = {handleAddTodo}

            />
          </div>
        </div>
      </div>
    </div>
  );
};
