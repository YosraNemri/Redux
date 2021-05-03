import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { editTask } from "../../Actions";
import { useDispatch } from "react-redux";

function EditTask({ id, task }) {
    const [newTask, setNewTask] = useState({});

    const handleChange = (input) => {
        setNewTask(input);
    };
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(editTask({ newTask: newTask, id }));
        handleClose();
    };

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        placeholder={task}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask;
