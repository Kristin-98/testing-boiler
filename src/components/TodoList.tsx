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
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md ">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo</h1>
        <ul className="mb-5 p-4">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              done={todo.done}
              onToggle={() => toggleTodo(index)}             
            />
          ))}
        </ul>
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Skriv ny todo..."
            className="flex-1 p-2 border-1 rounded"
          />
          <button onClick={addTodo} className="bg-slate-700 text-white px-4 rounded hover:bg-slate-900">Lägg till</button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
