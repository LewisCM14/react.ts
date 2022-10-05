import React from "react";

import TodoItem from "./TodoItem";
import Todo from "../models/todo";

import classes from './Todos.module.css';

// uses the type FunctionalComponent, ensuring the children prop is always viable
// then defines the generic type field of this type
// as an object with a key of items that expects an array with the structure defined in the todo.ts model
// also passes the function for removing an item from the list to App.tsx
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
            ))}
        </ul>
    );
};

export default Todos;
