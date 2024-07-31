import React from 'react'
import { useState, Dispatch, SetStateAction } from 'react'
import { Todo } from '../interfaces/todo'
import { addTodo, getTodos } from '../services/todoService'


interface PropsType {
  setTodos: Dispatch<SetStateAction<Todo[]>>
}

const TodoForm: React.FC<PropsType> = ({ setTodos }) => {
  const [newTodoText, setNewTodoText] = useState<string>('')

  // add todo
  const handleSubmit = () => {
    if (newTodoText.trim() === '') return
    const newTodo = addTodo(newTodoText)
    setTodos([...getTodos(), newTodo])
    setNewTodoText('')
  }
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Add New Todo
          </label>
          <input
          value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} placeholder="Add Todo"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autoFocus={true}
          />
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">
          Add
        </button>
      </form>

    </>
  )
}

export default TodoForm