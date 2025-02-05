function Todo({ id, title, desc, onDeleteTodo }) {
  console.log("One todo", id, title, desc);

  return (
    <div>
      <h2>{title}</h2>
      <p>{desc}</p>
      <button onClick={() => onDeleteTodo(id)}>Delete</button>
    </div>
  );
}

export default Todo;
