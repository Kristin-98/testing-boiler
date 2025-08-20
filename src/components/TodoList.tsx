import { useState } from "react";
import TodoItem from "./TodoItem";

type TodoListProps = {
  initialTodos?: string[];
};

function TodoList({ initialTodos = [] }: TodoListProps) {
  const [todos, setTodos] = useState<string[]>(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div>
      <h1>todo lista rubrik</h1>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} />
        ))}
      </ul>
      <input
        type="
      text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Skriv ny todooooo"
      />
      <button onClick={addTodo}>Lägg till din todo</button>
    </div>
  );
}

export default TodoList;
