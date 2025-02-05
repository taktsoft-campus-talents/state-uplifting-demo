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
  },
  {
    id: 2,
    title: "Buy milk",
    desc: "I won't be able to cook without it!",
  },
];

function App() {
  // const [count, setCount] = useState(0);
  // console.log("I am parent", count);
  const [todos, setTodos] = useState(data);

  function deleteTodo(id) {
    console.log("id", id);

    let result = todos.filter((todo) => {
      return todo.id !== id;
    });

    console.log("result", result);

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
            onDeleteTodo={deleteTodo}
          ></Todo>
        );
      })}
    </>
  );
}

export default App;
