import Button, { SelectButton } from './Button'

import '../styles/header.styles.css'

function Header() {
  return (
    <header>
      <Button varient='primary' type='button'>
        Click Me
      </Button>
      <SelectButton>
        <option value='all'>All</option>
        <option value='incomplete'>Incomplete</option>
        <option value='complete'>Complete</option>
      </SelectButton>
    </header>
  )
}

export default Header
