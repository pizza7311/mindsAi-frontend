import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="bg-white w-[800px] h-[900px] rounded-2xl">
      <div className="border-b border-gray-200">
        <h1 className="text-4xl font-extrabold p-4">Today&apos;s work</h1>
      </div>
      <div className="w-full pt-2">
        <TodoItem isDone={false} title="task1"></TodoItem>
        <TodoItem isDone={false} title="task1"></TodoItem>
      </div>
    </div>
  );
};

export default TodoList;
