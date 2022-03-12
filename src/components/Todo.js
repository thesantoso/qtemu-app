import React, { useState } from 'react';
import { Button, ListGroupItem, Input, Form } from "reactstrap";

const Todo = ({ deleteTodo, toggleTodo, editTodo, task, completed, id }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editedTodo, setEditedTodo] = useState(task);
    const handleEditTodo = (e) => {
        e.preventDefault();
        editTodo(id,editedTodo);
        setIsEdit(false)
    }
    return (
        <ListGroupItem id={id} key={id} name="todo" value={id} color={completed ? "success" : ""} className="d-flex justify-content-between">
            {isEdit ? (
                <Form onSubmit={handleEditTodo} className="d-flex flex-row justify-content-between mb-3">
                    <Input value={editedTodo} type="text" onChange={(e) => setEditedTodo(e.target.value)} placeholder="Enter task" />
                    <Button color="primary" className="ml-3">Save</Button>
                </Form>
            ) : task}
            <div>
                {!isEdit &&
                    <Button onClick={()=>setIsEdit(true)} color="secondary" className="mr-3">Update</Button>
                }
                <Button onClick={toggleTodo} color="success" className="mr-3">Done</Button>
                <Button onClick={deleteTodo} color="danger">Delete</Button>
            </div>
        </ListGroupItem>
    )
}

export default Todo
