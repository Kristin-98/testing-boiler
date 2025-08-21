import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <h1 className="flex justify-center">Today´s To Do</h1>
      <TodoList initialTodos={[]} />
    </div>
  );
}

export default App;
