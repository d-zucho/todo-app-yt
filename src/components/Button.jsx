import '../styles/button.styles.css'
function Button({ type, varient, children }) {
  return (
    <button
      className={`btn ${
        varient === 'primary' ? 'btn_primary' : 'btn_secondary'
      }`}
      type={type}
      varient={varient}
    >
      {children}
    </button>
  )
}

function SelectButton() {
  return <div></div>
}

export { Button, SelectButton }

export default Button
