import React, { useState } from 'react'
import { Todo } from '../interfaces/todo'
import { deleteTodo, getTodos, updateTodo } from '../services/todoService'
import { CiEdit } from 'react-icons/ci'
import { MdCancel, MdDeleteForever } from 'react-icons/md'
import { IoMdCheckmark } from 'react-icons/io'

const TodoListTable = () => {
    // manage state here
    const [todos, setTodos] = useState<Todo[]>(getTodos())
    const [editingTodoId, setEditingTodoId] = useState<number | null>(null)
    const [editedTodoText, setEditedTodoText] = useState<string>('')

    const handleEditTodo = (id: number, text: string) => {
        setEditingTodoId(id)
        setEditedTodoText(text)
    }

    const calcelEditTodo = () => {
        setEditingTodoId(null)
        setEditedTodoText('')
    }
    const handleEditSave = (id: number) => {
        if (editedTodoText.trim() === '') return
        const currentUpdatedTodo = updateTodo({
            id,
            title: editedTodoText,
            completed: false
        })
        setTodos(todos.map(todo => todo.id === currentUpdatedTodo.id ? currentUpdatedTodo : todo))
        setEditingTodoId(null)
        setEditedTodoText('')
    }
    // delete todo
    const handleDeleteTodo = (id: number) => {
        deleteTodo(id)
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Todo lists</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={todo.id}>
                            <th scope="row">{index + 1}</th>
                            <td>
                                {editingTodoId === todo.id ? (
                                    <div className="input-group-prepend">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={editedTodoText}
                                            onChange={(e) => setEditedTodoText(e.target.value)}
                                            autoFocus={true}
                                        />
                                    </div>
                                ) : (
                                    <span>{todo.title}</span>
                                )}
                            </td>
                            <td>
                                {editingTodoId === todo.id ? (
                                    <>
                                        <button className="btn btn-primary mr-2" onClick={() => handleEditSave(todo.id)}> <IoMdCheckmark/> </button>
                                        <button className="btn btn-danger" onClick={calcelEditTodo}><MdCancel/></button>
                                    </>
                                ) : (
                                    <>
                                        <div className="ms-auto">
                                                <button className="btn btn-primary mr-2" onClick={() => handleEditTodo(todo.id, todo.title)}><CiEdit /></button>
                                                <button className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)}> <MdDeleteForever /> </button>
                                        </div>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default TodoListTable