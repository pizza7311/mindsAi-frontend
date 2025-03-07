"use client";

import { FaPlus } from "react-icons/fa6";
import useTodoList from "../hooks/useTodoList";
import TodoItem from "./TodoItem";
import TodoListPlaceHolder from "./TodoListPlaceHolder";

const TodoList = () => {
  const {
    todoList,
    handleDelete,
    handleComplete,
    handleTitle,
    title,
    handleSubmit,
  } = useTodoList();
  return (
    <div className="bg-white w-[800px] h-[900px] rounded-2xl flex-col flex">
      <div className="border-b border-gray-200 flex-none">
        <h1 className="text-4xl font-extrabold p-4">Today&apos;s work</h1>
      </div>
      {/* custom scroll style from : https://preline.co/docs/custom-scrollbar.html */}
      <div
        className="w-full pt-2 overflow-y-scroll  grow
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
      {/* 하단 추가 */}
      {/* FIXME:tile 수정할때 아래의 div만 리렌더링 되어야함 */}
      <div className="border-t border-gray-200 w-full flex-none">
        <div className="p-4 flex justify-center">
          <input
            value={title}
            onChange={handleTitle}
            className="border border-gray-300 rounded-lg bg-gray-50 p-1 w-2/3 focus:bg-white"
            type="text"
            placeholder="작업 추가"
          ></input>
          <button
            className="px-3 hover:cursor-pointer hover:text-blue-600"
            onClick={handleSubmit}
          >
            <FaPlus size={"30"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
