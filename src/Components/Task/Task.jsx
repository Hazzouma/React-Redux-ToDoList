import React, { Fragment, useState } from 'react'
import {Modal, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {modifyTask} from '../../Actions';
import { toggleTask } from "../../Actions"
import './Task.css';

function Task({task, i}) {
    // const todos = useSelector(state => state.todosReducer.todos);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        dispatch(modifyTask({ modifiedName, id: task.id }));
    };
    const handleShow = () => setShow(true);

    const [modifiedName, setModifiedName] = useState('');
    const changer = (s) => setModifiedName(s);

    const handleClick = () => {
        dispatch(toggleTask({ id: task.id }))
    }

    return (
        <Fragment>
            <hr />
            <article className='taskClass'>
                <h3 style={{ textDecoration: task.isDone ? "line-through" : "none" }}>N°{i+1}: {task.title}</h3>
                <div className='btns'>
                    <button type="button" className="btn btn-secondary" onClick={handleClick}>{task.isDone ? "Undone" : "Done"}</button>
                    <button type="button" className="btn btn-secondary" onClick={handleShow}>Edit</button>
                </div>
            </article>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type='text' className='form-control-lg' defaultValue={task.title} onChange={e=>changer(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default Task
