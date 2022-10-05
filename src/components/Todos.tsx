import React from "react";

// uses the type FunctionalComponent, ensuring the children prop is always viable
// then defines the generic type field of this type
// as an object with a key of items that expects an array of strings
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
