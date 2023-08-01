import './App.css'
import '@fontsource/poppins'
import PageTitle from './components/PageTitle'
import Header from './components/Header'
import TodoList from './components/TodoList'

// global styles
import './styles/GlobalStyles.css'

function App() {
  return (
    <>
      <PageTitle>Todo List</PageTitle>
      <div className='container'>
        <Header />
        <TodoList />
      </div>
    </>
  )
}

export default App
