import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import TodosContext from "../store/todos-context";

const Todos: React.FC = (props) => {
  const todosContext = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosContext.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDelete={todosContext.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

// -------------------- BEFORE CONTEXT --------------------
// type Props = {
//   items: Todo[];
//   children?: ReactNode;
//   onDelete: (id: string) => void;
// };

// const Todos: React.FC<Props> = (props) => {
//   return (
//     <ul className={classes.todos}>
//       {props.items.map((item) => (
//         <TodoItem
//           key={item.id}
//           text={item.text}
//           onDelete={props.onDelete.bind(null, item.id)}
//         />
//       ))}
//     </ul>
//   );
// };

// type Props = {
//   children?: React.ReactNode;
//   items: string[];
// };

// function Component(props: Props): React.ReactNode {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// }

export default Todos;
