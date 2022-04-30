import "./styles.css";
import { Form } from "./components/Form";
import { useState } from "react";
import { TodoList } from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (newtodo) => {
    setTodos([...todos, newtodo]);
  };
  const removeTodo = (todoIndex) => {
    const todoCopy = [...todos];

    todoCopy.splice(todoIndex, 1);

    setTodos(todoCopy);
  };
  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}
