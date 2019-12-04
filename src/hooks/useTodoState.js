import useLocalStorageState from './useLocalStorageState';
import uuid from 'uuid';

export default initTodos => {
	const [ todos, setTodos ] = useLocalStorageState('todos', initTodos);

	const addTodo = newTodoText => {
		setTodos([
			...todos,
			{ id: uuid(), task: newTodoText, completed: false }
		]);
	};

	const removeTodo = todoId => {
		const updatedTodos = todos.filter(todo => todo.id !== todoId);
		setTodos(updatedTodos);
	};

	const toggleTodo = todoId => {
		const updatedTodos = todos.map(
			todo =>
				todo.id === todoId
					? { ...todo, completed: !todo.completed }
					: todo
		);
		setTodos(updatedTodos);
	};

	const editTodo = (todoId, newTask) => {
		const updatedTodos = todos.map(
			todo => (todo.id === todoId ? { ...todo, task: newTask } : todo)
		);
		setTodos(updatedTodos);
	};

	return {
		todos,
		addTodo,
		removeTodo,
		toggleTodo,
		editTodo
	};
};
