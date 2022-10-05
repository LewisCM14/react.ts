import React, {useRef} from "react";

const NewTodo = () => {
    // defines the expected type on the ref, with initial value defined as null
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        // confirms to typescript this value cannot be null at this point
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>Todo Text</label>
            <input type='text' id='text' ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;