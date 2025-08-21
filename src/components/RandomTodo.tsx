type RandomTodoProps = {
  todos: string[];
  onPick: (todo: string) => void;
  getRandomTodo?: (todos: string[]) => string;
};

export default function RandomTodo({
  todos,
  onPick,
  getRandomTodo = (list) =>
    list[Math.floor(Math.random() * list.length)],
}: RandomTodoProps) {
  const handleClick = () => {
    if (todos.length === 0) return;
    const random = getRandomTodo(todos);
    onPick(random);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-slate-500 text-white px-3 py-1 rounded hover:bg-slate-800 mt-3"
    >
      Slumpa fram en todo
    </button>
  );
}

