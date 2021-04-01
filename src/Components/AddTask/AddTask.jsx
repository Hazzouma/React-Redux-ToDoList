import React, { Fragment, useState } from 'react'
import {useDispatch} from 'react-redux';
import {addTask} from '../../Actions';
import './AddTask.css';

function AddTask() {

    const [task, setTask] = useState('');

    const putTask = x =>setTask(x);
    
    const dispatch = useDispatch()
    const handleSubmit = () => {
        if (task.length!== 0)
        dispatch(addTask({ task }));
        else alert("Write down something, Don't oversmart!");
        setTask('');
    }

    return (
        <Fragment>
            <h6>© Hazem Housseini</h6>
            <nav className='navHeader'>
                <h1>Todo List</h1>
                <div className='addTask'>
                    <input type='text' placeholder='Add task...' className="form-control" name='add' onChange={(e)=>putTask(e.target.value)} value={task}/>
                    <button type="button" className="btn btn-secondary form-control" onClick={handleSubmit}>Add Task</button>
                </div>
            </nav>
        </Fragment>
    )
}

export default AddTask
