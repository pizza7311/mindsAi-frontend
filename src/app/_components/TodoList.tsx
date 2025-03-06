"use client";

import useTodoList from "../hooks/useTodoList";
import TodoItem from "./TodoItem";
import TodoListPlaceHolder from "./TodoListPlaceHolder";

const TodoList = () => {
  const { todoList, handleDelete, handleComplete } = useTodoList();
  return (
    <div className="bg-white w-[800px] h-[900px] rounded-2xl">
      <div className="border-b border-gray-200">
        <h1 className="text-4xl font-extrabold p-4">Today&apos;s work</h1>
      </div>
      {/* custom scroll style from : https://preline.co/docs/custom-scrollbar.html */}
      <div
        className="w-full pt-2 overflow-y-scroll max-h-[800px]
      [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
      "
      >
        {todoList?.length === 0 ? (
          <TodoListPlaceHolder></TodoListPlaceHolder>
        ) : (
          todoList?.map(({ complete, id, title }) => {
            return (
              <TodoItem
                id={id}
                complete={complete}
                handleDelete={handleDelete}
                handleComplete={handleComplete}
                title={title}
                key={id}
              ></TodoItem>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TodoList;
