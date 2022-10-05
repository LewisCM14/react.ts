import React, { useRef } from "react";

// defines that the props type expected is a function with one argument
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
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

		// passes the ref text to the function found in App.tsx
		props.onAddTodo(enteredText);
	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="text">Todo Text</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
