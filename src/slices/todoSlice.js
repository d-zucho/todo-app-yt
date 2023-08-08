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
  },
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
