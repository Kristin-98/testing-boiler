type TodoItemProps = {
  text: string;
};

function TodoItem({ text }: TodoItemProps) {
  return <li>{text}</li>;
}

export default TodoItem;
