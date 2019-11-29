import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';

const TodoApp = () => {
	const initialTodos = [
		{ id: 1, task: 'Clean fish tank', completed: false },
		{ id: 2, task: 'Wash car', completed: true },
		{ id: 3, task: 'Grow beard', completed: false }
	];
	const [ todos, setTodos ] = useState(initialTodos);
	return (
		<Paper
			style={{
				backgroundColor: '#fafafa',
				padding: 0,
				margin: 0,
				height: '100vh'
			}}
		>
			<AppBar
				color='primary'
				position='static'
				style={{ height: '64px' }}
			>
				<Toolbar>
					<Typography color='inherit'>TODOS WITH HOOKS</Typography>
				</Toolbar>
			</AppBar>
			<TodoList todos={todos} />
		</Paper>
	);
};

export default TodoApp;
