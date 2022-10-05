import React, { useState } from 'react';

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
    // state management for an array of Todo's based on the relevant model, initializing as an empty array
    const [todos, setTodos] = useState<Todo[]>([]);

    // adds the item passed from NewTodo.tsx
    const addTodoHandler = (todoText: string) => {
      // collects the todo being submitted in the NewTodo form
      const newTodo = new Todo(todoText);

      // uses concat to replace the prev array with one to include the new todo item
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      });
    };

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} />
        </div>
    );
}

export default App;
