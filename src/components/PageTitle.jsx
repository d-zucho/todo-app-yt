import '../styles/PageTitle.css'

function PageTitle({ children, ...rest }) {
  return (
    <div>
      <h1 className='pageTitle' {...rest}>
        {children}
      </h1>
    </div>
  )
}

export default PageTitle
