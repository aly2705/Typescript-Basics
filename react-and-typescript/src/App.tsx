import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { TodosContextProvider } from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

// -------------------------------------- BEFORE CONTEXT ------------------------------
// function App() {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const addTodoHandler = (todoText: string) => {
//     const newTodo = new Todo(todoText);
//     setTodos((prevTodos) => prevTodos.concat(newTodo));
//   };
//   const deleteTodoHandler = (id: string) => {
//     setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
//   };
//   return (
//     <div>
//       <NewTodo onAddTodo={addTodoHandler} />
//       <Todos items={todos} onDelete={deleteTodoHandler} />
//     </div>
//   );
// }

export default App;
