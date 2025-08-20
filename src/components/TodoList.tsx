import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: string[];
};

function TodoList({ todos }: TodoListProps) {
  return (
    <div>
      <h1>todo lista rubrik</h1>;
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
