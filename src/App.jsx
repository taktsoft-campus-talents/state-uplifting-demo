import "./App.css";
import Counter from "./components/Counter";
import Display from "./components/Display";
import { useState } from "react";
import Todo from "./components/Todo";

const data = [
  {
    id: 1,
    title: "Water plants",
    desc: "It's very important!",
    isDone: true,
  },
  {
    id: 2,
    title: "Buy milk",
    desc: "I won't be able to cook without it!",
    isDone: false,
  },
];

function App() {
  // const [count, setCount] = useState(0);
  // console.log("I am parent", count);
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

  return (
    <>
      {/* <Counter count={count} setCount={setCount}></Counter>
      <Display totalCount={count}></Display> */}

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
