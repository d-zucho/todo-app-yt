// import { useState } from 'react'
import { format } from 'date-fns'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../slices/todoSlice.js'
import { Toaster, toast } from 'react-hot-toast'
// import actions set up in the todoSlice.js file
import '../styles/todo.styles.css'
import { useState } from 'react'

function Todo({ todo, statusHandler }) {
  const dispatch = useDispatch()
  const [updateModalOpen, setUpdateModalOpen] = useState(false)

  const handleDelete = (id) => {
    dispatch(deleteTodo(todo.id))
    toast.success('Todo deleted successfully')
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
