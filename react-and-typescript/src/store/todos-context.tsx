import React, { ReactNode, useState } from "react";
import Todo from "../models/todo";

type TodoContextState = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = React.createContext<TodoContextState>({
  items: [],
  addTodo: (text: string) => {},
  deleteTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC<{ children: ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };
  const deleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };

  const contextValue: TodoContextState = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
