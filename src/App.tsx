import CounterButton from "./components/CounterButton";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <h1>Vite + React</h1>

      <CounterButton />
      <TodoList initialTodos={[]} />
    </div>
  );
}

export default App;
