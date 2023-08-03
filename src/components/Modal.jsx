import '../styles/modal.styles.css'
import Button from './Button'
import { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'

function Modal({ open, handleModal }) {
  const [todo, setTodo] = useState({
    complete: false,
    todoDescription: 'Hello world',
  })

  const handleSubmit = () => {
    e.preventDefault()
    console.log('form submitted')

    console.log(document.getElementById('modal-form').elements)
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
              <h1 className='formTitle'>Add Task</h1>
              <div className='form-group'>
                <label className='form-label' htmlFor='title'>
                  Title:{' '}
                </label>
                <input type='text' name='title' id='title' />
                <label className='form-label' htmlFor='status'>
                  Status:{' '}
                </label>
                <select name='status' id='status'>
                  <option value='incomplete'>Incomplete</option>
                  <option value='complete'>Complete</option>
                </select>
              </div>
              <div className='buttonContainer'>
                <Button
                  type='submit'
                  varient='primary'
                  onClick={() => handleModal(false)}
                >
                  Add task
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
