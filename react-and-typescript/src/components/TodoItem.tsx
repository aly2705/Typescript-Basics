import React from "react";
import classes from "./TodoItem.module.css";

type Props = {
  text: string;
  onDelete: () => void;
};

const Todo: React.FC<Props> = (props) => {
  return (
    <li className={classes.item} onClick={props.onDelete}>
      {props.text}
    </li>
  );
};

export default Todo;
