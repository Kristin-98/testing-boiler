import { useState } from "react";
import TodoItem from "./TodoItem";

type Todo = {
  text: string;
  done: boolean;
};

type TodoListProps = {
  initialTodos?: string[];
};

function TodoList({ initialTodos = [] }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>(
    initialTodos.map((t) => ({ text: t, done: false }))
  );
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { text: newTodo, done: false }]);
    setNewTodo("");
  };

  const toggleTodo = (index: number) => {
    const updated = [...todos];
    updated[index].done = !updated[index].done;
    setTodos(updated);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold underline">todo lista rubrik</h1>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            done={todo.done}
            onToggle={() => toggleTodo(index)}
          />
        ))}
      </ul>
      <input
        type="
      text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Skriv ny todo..."
      />
      <button onClick={addTodo}>Lägg till</button>
    </div>
  );
}

export default TodoList;
