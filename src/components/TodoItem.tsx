import classes from './TodoItem.module.css';

// constructs the structure of each individual todo item, passed to Todos.tsx
const TodoItem: React.FC<{ text: string }> = (props) => {
    return <li className={classes.item}>{props.text}</li>;
};

export default TodoItem;
