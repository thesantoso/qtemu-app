import React, { useState } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { addEvent } from '../action/events';
import { useDispatch } from 'react-redux';


const ModalAddEvent = ({
    isOpen,
    handleCloseModal
}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    let dispatch = useDispatch();
    const createEvent = (title, description, date) => {
        dispatch(addEvent(title, description, date))
    }
    const handleChangeTitle = (e) => {
        setTitle(e.currentTarget.value);
    }
    const handleChangeDesc = (e) => {
        setDescription(e.currentTarget.value);
    }
    const handleSubmitEvent = (e) => {
        const date =new Date(Date.now()).toLocaleString();
        e.preventDefault();
        createEvent({ title, description, date });
        handleCloseModal();
    }

    return (
        <Modal isOpen={isOpen} toggle={handleCloseModal} size="lg" centered>
            <ModalHeader toggle={handleCloseModal}>Create New Event</ModalHeader>
            <Form onSubmit={handleSubmitEvent}>
                <ModalBody>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" value={title} onChange={handleChangeTitle} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="desc">Description</Label>
                        <Input type="textarea" name="description" id="description" value={description} onChange={handleChangeDesc} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter className="pt-0">
                    <Button type="submit" color="primary">Create</Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}

export default ModalAddEvent;