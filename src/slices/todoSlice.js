import { createSlice } from '@reduxjs/toolkit'

const getInitialTodos = () => {
  const localTodoList = localStorage.getItem('todoList')

  // if localTodoList exists, parse it and return it
  if (localTodoList) {
    return JSON.parse(localTodoList)
  }
  // else, return an empty array
  localStorage.setItem('todoList', JSON.stringify([]))
  return []
}

const initialValue = {
  todoList: getInitialTodos(),
  // this is the initial value of the state using the getInitialTodos function above
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  // initialState is the initial value of the state that came from the reducer

  reducers: {
    // reducers are functions that can update the state of the store
    addTodo: (state, action) => {
      state.todoList.push(action.payload)
      const todoList = localStorage.getItem('todoList')
      if (todoList) {
        const parsedTodoList = JSON.parse(todoList)
        parsedTodoList.push({
          ...action.payload,
        })
        // here we are updating the local storage with the new todo
        localStorage.setItem('todoList', JSON.stringify(parsedTodoList))
      }
    },
    deleteTodo: (state, action) => {
      // second reducewr
      const todoList = localStorage.getItem('todoList')
      if (todoList) {
        const parsedTodoList = JSON.parse(todoList)
        parsedTodoList.forEach((todo, index) => {
          if (todo.id === action.payload) {
            // if the todo id is equal to the payload id, remove it from the array
            parsedTodoList.splice(index, 1)
          }
        })
        localStorage.setItem('todoList', JSON.stringify(parsedTodoList))

        state.todoList = parsedTodoList // update the state
      }
    },
    updateTodo: (state, action) => {
      const todoList = localStorage.getItem('todoList')
      if (todoList) {
        const parsedTodoList = JSON.parse(todoList)
        // loop through the todo list and find the todo with the same id as the payload and update it
        parsedTodoList.forEach((todo, index) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title
            todo.status = action.payload.status
          }
        })
        localStorage.setItem('todoList', JSON.stringify(parsedTodoList))
        state.todoList = parsedTodoList
      }
    },
  },
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer
