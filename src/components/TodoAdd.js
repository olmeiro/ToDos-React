import React from "react";
import useForm from "../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("nueva tarea");

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h1>AgregarToDo:</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          name="description"
          className="form-control"
          placeholder="Aprendiendo"
          autoComplete="off"
          onChange={handleInputChange}
          value={description}
        />
        <button className="btn btn-success mt-4" type="submit">
          Agregar Todo
        </button>
      </form>
    </>
  );
};
