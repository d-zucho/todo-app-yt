import '../styles/button.styles.css'
function Button({ type, varient, children, ...rest }) {
  return (
    <button
      className={`btn ${
        varient === 'primary' ? 'btn_primary' : 'btn_secondary'
      }`}
      type={type}
      varient={varient}
      {...rest}
    >
      {children}
    </button>
  )
}

export function SelectButton({ children, id, ...rest }) {
  return (
    <select id={id} className='btn btn_select'>
      {children}
    </select>
  )
}

export default Button
