import React, { Fragment, useState } from 'react'
import Task from '../Task/Task';
import './ListTask.css';
import { useSelector } from "react-redux";

function ListTask() {
    const todos = useSelector(state => state.todosReducer.todos);
    const [noFilter, setNoFilter] = useState(true);
    const [done, setDone] = useState(false);
    return (
        <Fragment>
            <main className='mainBtn'>
                <button type="button" className="btn btn-secondary" onClick={()=>setDone(!done)}>{done? 'Show undone' : 'Show Done'}</button>
                <button type="button" className="btn btn-secondary" onClick={()=>setNoFilter(!noFilter) }>{noFilter?'Activate Filters' : 'Disactivate Filters'}</button>
            </main>
            <section>
                { noFilter ?
                todos.map((element, index)=>
                    <Task task={element} i={index} key={index} />
                ) : done ?
                todos.filter(element=>element.isDone===true).map((element, index)=>
                <Task task={element} i={index} key={index} />
                ) : 
                todos.filter(element=>element.isDone===false).map((element, index)=>
                <Task task={element} i={index} key={index} />
                )
                }
            </section>
            
        </Fragment>
    )
}

export default ListTask;
