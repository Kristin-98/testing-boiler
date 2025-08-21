type TodoItemProps = {
  text: string;
  done: boolean;
  onToggle: () => void;
};

function TodoItem({ text, done, onToggle }: TodoItemProps) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={done} onChange={onToggle} />
        <span style={{ textDecoration: done ? "line-through" : "none" }}>
          {text}
        </span>
      </label>
    </li>
  );
}

export default TodoItem;
