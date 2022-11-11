import React, { useState } from 'react';
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";

import { useTodoFacade } from "../../data-access/Todo";
import './Todo.css';

export const TodoList = () => {
    // Facades
    const { deleteToDo, editTodo, todoList } = useTodoFacade();

    // States
    const [ isEditing, setEditing ] = useState(false);
    const [ state, setState ] = useState({
        id: '',
        content: '',
        contentError: null
    });

    const onEditToggle = ( id, content) => {
        setEditing(true);
        setState({
            ...state, id, content
        })
    }

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value, [`${e.target.name}Error`]: null });
    }

    const { content, contentError, id } = state;

    const edit = () => {
        if (content === ''){
            setState({...state, contentError: 'You must write something!'});
            return;
        }
        editTodo({content, id});
        setEditing(false);
    }

    return <div>
        {
            isEditing &&
                <div className='form'>
                    <h2>Update your plan for today</h2>
                    <input type='text' value={content} name='content' onChange={handleChange}></input>
                    <button type='button' className='button' onClick={edit}>Edit</button>
                    {contentError ? <div className='error'>{contentError}</div> : null}
                </div>
        }
        <h2 className='form'>List of Plans</h2>
        <ul className='todos'>
            {
                todoList.map(({id, content})=> {
                    return <li className='grid' key={id}>
                            <span className='content'>{content}</span>
                            <span className='todo-action'>
                                <AiOutlineCloseCircle className="close" onClick={() => deleteToDo({id})}/>
                                <AiFillEdit className="edit" onClick={() =>onEditToggle(id, content)} />
                            </span>
                            </li>
                    })
            }
        </ul>
    </div>;
};
