import { useEffect } from 'react'
import Todo from './Todo'

function TodoList() {
  let data = localStorage.getItem('todoList') ?? []
  let parsedTodoList = JSON.parse(data)
  console.log(parsedTodoList)
  // render the todos when state changes
  // useEffect(() => {
  //   console.log('useEffect')
  // }, [parsedTodoList])

  // get todos from localStorage if they exist
  // if not, assign as empty array

  // delete todo
  // const deleteTodo = (id) => {
  //   // filter out the todo with the id that matches the id passed in
  //   const filteredList = parsedTodoList.filter((todo) => todo.id !== id)
  //   // update localStorage
  //   localStorage.setItem('todoList', JSON.stringify(filteredList))
  //   // update state
  //   parsedTodoList = filteredList
  // }

  return (
    <div>
      {parsedTodoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
