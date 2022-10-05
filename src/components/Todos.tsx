import React from "react";

import Todo from "../models/todo";

// uses the type FunctionalComponent, ensuring the children prop is always viable
// then defines the generic type field of this type
// as an object with a key of items that expects an array with the structure defined in the todo.ts model
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
