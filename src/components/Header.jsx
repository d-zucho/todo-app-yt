import Button, { SelectButton } from './Button.jsx'
import Modal from './Modal.jsx'

import '../styles/header.styles.css'
import { useState } from 'react'

function Header() {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <header>
      <Button
        varient='primary'
        type='button'
        onClick={() => handleModal(false)}
        role='button'
        id='addTask'
      >
        Add Task
      </Button>

      <SelectButton>
        <option value='all'>All</option>
        <option value='incomplete'>Incomplete</option>
        <option value='complete'>Complete</option>
      </SelectButton>

      <Modal open={openModal} handleModal={setOpenModal} />
    </header>
  )
}

export default Header
