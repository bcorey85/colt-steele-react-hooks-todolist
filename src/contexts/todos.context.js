import React, { createContext, useReducer } from 'react';
import todosReducer from '../reducers/todo.reducer.js';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
	{ id: 1, task: 'Mow the lawn with goats', completed: false },
	{ id: 2, task: 'Release lady bugs into garden', completed: true }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
	const [ todos, dispatch ] = useReducer(todosReducer, defaultTodos);
	return (
		<TodosContext.Provider value={{ todos, dispatch }}>
			{props.children}
		</TodosContext.Provider>
	);
}
