import { useEffect, useState } from "react";
import { TodoItem } from "../types/todo.type";

const useTodoList = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>();

  const _saveTodoLocalstorage = (todos: TodoItem[]) => {
    if (todos.length === 0) {
      _deleteLocalStorageTodos();
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const _deleteLocalStorageTodos = () => {
    localStorage.removeItem("todos");
  };

  const handleDelete = (todoId: number) => {
    if (!todoList) return;
    const newTodos = todoList.filter(({ id }) => id !== todoId);
    setTodoList(newTodos);
    _saveTodoLocalstorage(newTodos);
  };

  //로드시 localStorage 확인후 없을경우 jsonPlaceholder
  useEffect(() => {
    const getTodos = async () => {
      const items = localStorage.getItem("todos");
      if (!items) {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
          method: "GET",
        });

        const todos = (await res.json()) as TodoItem[];
        //5개 까지만
        setTodoList(todos.slice(0, 5));
        _saveTodoLocalstorage(todos.slice(0, 5));
      } else {
        const todos = JSON.parse(items) as TodoItem[];
        setTodoList(todos);
      }
    };

    getTodos();
  }, []);

  return { todoList, handleDelete };
};

export default useTodoList;
