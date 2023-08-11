import './App.css'
import '@fontsource/poppins'
import PageTitle from './components/PageTitle'
import Header from './components/Header'
import TodoList from './components/TodoList'

// global styles
import './styles/GlobalStyles.css'

import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <PageTitle>Todo List</PageTitle>
      <div className='main-container'>
        <Header />
        <TodoList />
      </div>
      <Toaster
        toastOptions={{
          // position: 'top-right',
          style: {
            fontSize: '1.5rem',
          },
        }}
      />
    </>
  )
}

export default App
