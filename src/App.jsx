import './App.css'
import '@fontsource/poppins'
import PageTitle from './components/PageTitle'
import Header from './components/Header'

// global styles
import './styles/GlobalStyles.css'
import Modal from './components/Modal'

function App() {
  return (
    <>
      <PageTitle>Todo List</PageTitle>
      <div className='container'>
        <Header />
        <Modal />
      </div>
    </>
  )
}

export default App
