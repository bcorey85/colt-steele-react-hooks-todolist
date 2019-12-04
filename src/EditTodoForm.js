import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/todos.context';

const EditTodoForm = ({ task, id, toggle }) => {
	const [ value, handleChange, reset ] = useInputState(task);
	const { dispatch } = useContext(TodosContext);

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				dispatch({ type: 'EDIT', id: id, newTask: value });
				reset();
				toggle();
			}}
			style={{ marginLeft: '1rem', width: '50%' }}>
			<TextField
				value={value}
				onChange={handleChange}
				margin='normal'
				fullWidth
				autoFocus
			/>
		</form>
	);
};

export default EditTodoForm;
