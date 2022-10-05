// constructs the structure of each individual todo item, passed to Todos.tsx

const TodoItem: React.FC<{ text: string }> = (props) => {
    return <li>{props.text}</li>;
};

export default TodoItem;
