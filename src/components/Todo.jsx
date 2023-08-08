import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import '../styles/todo.styles.css'

function Todo({ todo }) {
  return (
    <div className='item'>
      <div className='container'>
        <div className='content'>
          <input type='checkbox' name='checkmark' id='checkmark' />
          <span className='todoText'>{todo.title}</span>
          <div className='deleteIicon-container'>
            <FaTimes className='delete-icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
