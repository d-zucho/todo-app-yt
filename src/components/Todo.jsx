import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import '../styles/todo.styles.css'

function Todo() {
  const [todo, setTodo] = useState({
    complete: false,
    todoDescription: 'Hello world',
  })

  return (
    <div className='item'>
      <div className='container'>
        <div className='content'>
          <input type='checkbox' name='checkmark' id='checkmark' />
          <span className='todoText'>{todo.todoDescription}</span>
          <div className='deleteIicon-container'>
            <FaTimes className='delete-icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
