import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, completeTodo, deleteTodo, updateTodo } from '../action/todos';
import { ListGroup } from "reactstrap";

const TodoList = () => {
    const state = useSelector((state) => ({ ...state.todos }));
    let dispatch = useDispatch();
    const createTodo = (newTodo) => {
        dispatch(addTodo(newTodo))
    }
    const editTodo = (id, updatedTodo) => {
        dispatch(updateTodo({ id, updatedTodo }))
    }
    return (
        <div className="container p-3">
            <h1>To Do List</h1>
            <TodoForm createTodo={createTodo} />
            <ListGroup>
                {state.todos && state.todos.map(todo => {
                    return (
                        <Todo
                            id={todo.id}
                            key={todo.id}
                            task={todo.task}
                            completed={todo.completed}
                            toggleTodo={() => dispatch(completeTodo(todo))}
                            deleteTodo={() => dispatch(deleteTodo(todo))}
                            editTodo={editTodo}
                        />
                    )
                })}
            </ListGroup>
        </div>
    )
}

export default TodoList
