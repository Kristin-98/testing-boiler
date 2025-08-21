type RandomTodoProps = {
  todos: string[];
  onPick: (todo: string) => void;
  getRandomTodo?: (todos: string[]) => string;
};

function RandomTodo({ todos, onPick, getRandomTodo }: RandomTodoProps) {
  const pickRandom = () => {
    if(todos.length === 0) return;
    const picker =
      getRandomTodo ??
      ((list: string[]) => {
        const index = Math.floor(Math.random() * list.length);
        return list[index];
      });

    const todo = picker(todos);
    onPick(todo);
  };

  return (
    <button
      onClick={pickRandom}
      className="bg-slate-700 hover:bg-slate-900 text-white px-3 py-1 rounded mt-8"
    >
      Slumpa en todo
    </button>
  );
}

export default RandomTodo;
