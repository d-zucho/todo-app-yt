import { useEffect } from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

function TodoList() {
  //* get the todo list from the store

  //? useSelector is a hook that accepts a function as an argument and returns the value of the state

  const todoList = useSelector((state) => state.todo.todoList)

  const sortedTodoList = [...todoList]
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time))

  return (
    <div>
      {sortedTodoList.length > 0 ? (
        sortedTodoList.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <h2
          style={{
            textAlign: 'center',
            marginTop: '5rem',
          }}
        >
          {' '}
          Nothing planned yet!
        </h2>
      )}
    </div>
  )
}

export default TodoList
