import { set } from 'date-fns'
import '../styles/modal.styles.css'
import Button from './Button'
import { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { addTodo, updateTodo } from '../slices/todoSlice'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-hot-toast'

function Modal({ type, open, handleModal, todo }) {
  //* states
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('incomplete')

  //* redux dispatch
  const dispatch = useDispatch()

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title)
      setStatus(todo.status)
    } else {
      setTitle('')
      setStatus('incomplete')
    }
  }, [type, todo, open])

  //* submit form handler
  const handleSubmit = (e) => {
    e.preventDefault()

    // console.log('form submitted')
    // console.log(title, status)

    // make sure both fields are filled; if true, and if tyoe = 'add' dispatch the action
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuidv4(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        )
        //* reset the form
        setTitle('')
        setStatus('incomplete')
        handleModal(false)
        //* close modal
        toast.success('Task added successfully')
      }
    } else {
      toast.error('Please fill all fields')
    }
    if (type === 'update') {
      console.log('Updating Task Start!')

      if (todo.title !== title || todo.status !== status) {
        dispatch(
          updateTodo({
            ...todo,
            title,
            status,
          })
        )
        //* reset the form
        // setTitle('')
        // setStatus('incomplete')
        handleModal(false)
        //* close modal
        toast.success('Task updated successfully')
      } else {
        toast.error('No changes made')
      }
    }
  }

  return (
    <>
      {open ? (
        <div className='modal-wrapper'>
          <div className='modal-container'>
            <div
              onClick={() => handleModal(false)}
              className='closeIcon-container'
              onKeyDown={() => handleModal(false)}
              tabIndex={0}
              role='button'
            >
              <MdOutlineClose className='close-icon' />
            </div>
            <form onSubmit={handleSubmit} className='modal-form'>
              <h1 className='formTitle'>
                {type === 'add' ? 'Add a new task' : 'Edit task'}
              </h1>
              <div className='form-group'>
                <label className='form-label' htmlFor='title'>
                  Title:{' '}
                </label>
                <input
                  type='text'
                  name='title'
                  id='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label className='form-label' htmlFor='status'>
                  Status:{' '}
                </label>
                <select
                  name='status'
                  id='status'
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  onSubmit={setStatus}
                >
                  <option value='incomplete'>Incomplete</option>
                  <option value='complete'>Complete</option>
                </select>
              </div>
              <div className='buttonContainer'>
                <Button
                  type='submit'
                  varient='primary'
                  role='button'
                  // onClick={() => handleModal(false)}
                >
                  {type === 'add' ? 'Add' : 'Update'} task
                </Button>
                <Button
                  onClick={() => handleModal(false)}
                  type='button'
                  varient='secondary'
                  role='button'
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Modal
