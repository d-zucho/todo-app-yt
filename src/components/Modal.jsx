import '../styles/modal.styles.css'
import Button from './Button'
import { MdOutlineClose } from 'react-icons/md'

function Modal() {
  return (
    <div className='modal-wrapper'>
      <div className='modal-container'>
        <div className='closeIcon-container'>
          <MdOutlineClose className='close-icon' />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log('form submitted')
          }}
          className='modal-form'
        >
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
            <Button type='submit' varient='primary'>
              Add task
            </Button>
            <Button type='button' varient='secondary'>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
