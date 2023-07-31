import Button, { SelectButton } from './Button.jsx'
import Modal from './Modal.jsx'

import '../styles/header.styles.css'
import React, { useState } from 'react'

function Header() {
  const [openModal, setOpenModal] = useState(true)

  return (
    <header>
      <Button
        varient='primary'
        type='button'
        onClick={() => setOpenModal(true)}
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

      <Modal open={openModal} setOpenModal={setOpenModal} />
    </header>
  )
}

export default Header
