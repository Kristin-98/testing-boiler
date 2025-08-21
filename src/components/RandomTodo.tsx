type RandomTodoProps = {
  todos: string[];
  onPick: (todo: string) => void;
  getRandomTodo?: (todos: string[]) => string;
};

function RandomTodo({ todos, onPick, getRandomTodo }: RandomTodoProps) {
  const pickRandom = () => {
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
      className="bg-blue-600 text-white px-3 py-1 rounded"
    >
      Slumpa en todo
    </button>
  );
}

export default RandomTodo;
