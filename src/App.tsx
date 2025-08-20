import CounterButton from "./components/CounterButton";
import TodoList from "./components/TodoList";

function App() {
  const myTodos = ["köp 1", "köp 2"];

  return (
    <div>
      <h1>Vite + React</h1>

      <CounterButton />
      <TodoList todos={myTodos} />
    </div>
  );
}

export default App;
