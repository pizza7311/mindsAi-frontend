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
      <div className="w-full pt-2">
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
