import classes from "./TodoItem.module.css";

// constructs the structure of each individual todo item, passed to Todos.tsx
// ensures the passed todo is a string and defines the structure of the function attached
const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>
            {props.text}
        </li>
    );
};

export default TodoItem;
