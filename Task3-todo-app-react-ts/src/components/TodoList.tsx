import React, { useState } from 'react'
import { Todo } from '../interfaces/todo'
import { getTodos, deleteTodo, updateTodo } from '../services/todoService'
import TodoForm from './TodoForm'
import TodoListTable from './TodoListTable'

const TodoList = () => {
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
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-sm">
        //                 <TodoForm setTodos={setTodos} />
        //                 {/* todo input form */}
        //             </div>
        //             {todos.map((todo) => (
        //                 <div className="col-sm" key={todo.id}>
        //                     {editingTodoId === todo.id ? (
        //                         <div className="input-group-prepend">
        //                             <input type="text" className="form-control" value={editedTodoText} onChange={(e) => setEditedTodoText(e.target.value)} autoFocus={true} />
        //                             <button className="btn btn-primary" onClick={() => handleEditSave(todo.id)}>Save</button>
        //                             <button className="btn btn-danger" onClick={calcelEditTodo}>Cancel</button>
        //                         </div>         
        //                 ):(
        //                     <div className="col-sm">
        //                         <span>{todo.title}</span>
        //                         <button className="btn btn-primary" onClick={() => handleEditTodo(todo.id, todo.title)}>Edit</button>
        //                         <button className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        //                     </div>
        //                 )}
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        <div className="container text-center">
            <h1>Todo List App</h1>
            <div className="row">
                <div className="col">
                <TodoForm setTodos={setTodos}/>
                </div>
                <div className="col">
                    <TodoListTable/>
                </div>
            </div>
        </div>

    )
}

export default TodoList