import TodoList from "./_components/TodoList";

export default function Home() {
  return (
    <div>
      <div className="flex py-4 justify-center align-middle">
        <TodoList></TodoList>
      </div>
    </div>
  );
}
