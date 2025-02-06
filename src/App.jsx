import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo";
import { TodoForm } from "./components/TodoForm";

const data = [
  {
    id: 1,
    title: "Water plants",
    desc: "It's very important!",
    isDone: true,
  },
  {
    id: 3,
    title: "Staubsaugen",
    desc: "It's really dirty!!!",
    isDone: false,
  },
  {
    id: 2,
    title: "Buy milk",
    desc: "I won't be able to cook without it!",
    isDone: false,
  },
];

function App() {
  const [todos, setTodos] = useState(data);

  // delete pattern: use filter to filter out the selected id

  function deleteTodo(id) {
    console.log("id", id);

    let result = todos.filter((todo) => {
      return todo.id !== id;
    });

    console.log("result", result);

    setTodos(result);
  }

  // update pattern: use map to return a copy of the original array AND an updated record for the selected id

  function toggleTodo(id) {
    console.log("toggleTodo has been called with id", id);

    const result = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return todo;
      }
    });

    console.log(result);

    setTodos(result);
  }

  // {title: string, desc: string}
  // addTodo will generate a unique id for the new todo
  function addTodo(newTodo) {
    const sortedTodos = todos.toSorted((a, b) => b.id - a.id);
    const maxId = sortedTodos[0].id;

    const newTodos = [{ ...newTodo, isDone: false, id: maxId + 1 }, ...todos];
    setTodos(newTodos);
  }

  return (
    <>
      <TodoForm onSubmitTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            desc={todo.desc}
            isDone={todo.isDone}
            onDeleteTodo={deleteTodo}
            onToggleTodo={toggleTodo}
          ></Todo>
        );
      })}
    </>
  );
}

export default App;
