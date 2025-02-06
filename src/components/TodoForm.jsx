import "./TodoForm.css";
import { useState } from "react";

export function TodoForm({ onSubmitTodo }) {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("handleFormSubmit");
    onSubmitTodo({
      title: titleInput,
      desc: descriptionInput,
    });
  }

  return (
    <form onSubmit={handleFormSubmit} className="add-todo-form">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        value={titleInput}
        id="title"
        onChange={(event) => {
          setTitleInput(event.target.value);
        }}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        value={descriptionInput}
        id="description"
        name="description"
        onChange={(event) => {
          setDescriptionInput(event.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
}
