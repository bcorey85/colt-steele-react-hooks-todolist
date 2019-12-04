import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggle from './hooks/useToggle';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditTodoForm from './EditTodoForm';
import { TodosContext } from './contexts/todos.context';

const Todo = props => {
	const { task, id, completed } = props;
	const { dispatch } = useContext(TodosContext);
	const [ isEditing, toggle ] = useToggle();
	return (
		<ListItem style={{ height: '64px' }}>
			{isEditing ? (
				<EditTodoForm task={task} id={id} toggle={toggle} />
			) : (
				<React.Fragment>
					<Checkbox
						tabIndex={-1}
						checked={completed}
						onClick={() => dispatch({ type: 'TOGGLE', id: id })}
					/>
					<ListItemText
						style={{
							textDecoration: completed ? 'line-through' : 'none'
						}}>
						{task}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton
							aria-label='Delete'
							onClick={() =>
								dispatch({ type: 'REMOVE', id: id })}>
							<DeleteIcon />
						</IconButton>
						<IconButton aria-label='Edit' onClick={toggle}>
							<EditIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</React.Fragment>
			)}
		</ListItem>
	);
};

export default Todo;
