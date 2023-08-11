import { useEffect } from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { set } from 'date-fns'

function TodoList() {
  //* get the todo list from the store

  //? useSelector is a hook that accepts a function as an argument and returns the value of the state

  const todoList = useSelector((state) => state.todo.todoList)
  // state.todo.todoList comes from the slice file since we named the slice as todo and then the initial value of the state is todoList

  const sortedTodoList = [...todoList]
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time))

  // changing todo status
  // const handleCompleteTodo = (id) => {
  //   // the parameter becomes the id of the todo that is clicked
  //   // it gets the id through the onClick event handler in the input element

  //   const updatedTodoList = todoList.map((todo) => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         status: !todo.status,
  //       }
  //     }
  //   })
  //   setTodoList(updatedTodoList)
  // }

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
