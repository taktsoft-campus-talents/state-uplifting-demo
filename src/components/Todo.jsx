import "./Todo.css";

function Todo({ id, title, desc, onDeleteTodo, onToggleTodo, isDone }) {
  console.log("One todo", id, title, desc);

  return (
    <div className="todo-container">
      <h2>{title}</h2>
      <p>{desc}</p>
      <div>
        <input
          onChange={() => {
            console.log("Checkbox clicked");
            onToggleTodo(id);
          }}
          type="checkbox"
          id="is-done"
          checked={isDone}
        />
        <label htmlFor="is-done">Erledigt</label>
      </div>
      <button onClick={() => onDeleteTodo(id)}>Delete</button>
    </div>
  );
}

export default Todo;
