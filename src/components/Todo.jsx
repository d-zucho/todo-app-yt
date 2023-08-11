// import { useState } from 'react'
import { format } from 'date-fns'
import { MdDelete, MdEdit } from 'react-icons/md'
import '../styles/todo.styles.css'

function Todo({ todo, statusHandler }) {
  const handleDelete = (id) => {
    console.log('delete')
    console.log(todo.id, id)
  }

  const handleEdit = (id) => {
    console.log('edit')
    console.log(todo.id, id)
  }

  return (
    <div className='item'>
      <div className='todo-container'>
        <div className='content'>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              name='checkmark'
              id='checkmark'
              onClick={() => statusHandler(todo.id)}
            />
          </div>
          <span className='todoText'>{todo.title}</span>
          <div className='icons'>
            <div
              onClick={() => handleDelete(todo.id)}
              onKeyDown={() => handleDelete(todo.id)}
              role='button'
              className='icon-container'
            >
              <MdDelete className='icon delete-icon' />
            </div>
            <div
              onClick={() => handleEdit(todo.id)}
              onKeyDown={() => handleEdit(todo.id)}
              role='button'
              className='icon-container'
            >
              <MdEdit className='icon edit-icon' />
            </div>
          </div>
        </div>
        <p className='todo-time'>
          {format(new Date(todo.time), 'p, MM/dd/yyyy')}
        </p>
      </div>
    </div>
  )
}

export default Todo
