import { Todo } from '../interfaces/todo'
// todo srvices here

const LOCAL_STORAGE_KEY = 'todos'

// get from local storage
export function getTodos(): Todo[] {
    const todos = localStorage.getItem(LOCAL_STORAGE_KEY)
    return todos ? JSON.parse(todos) : []
}


// save to local storage
export function saveTodos(todos: Todo[]) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}


// add todo
export function addTodo(title: string): Todo {
    const todos = getTodos()
    const newTodo = {
        id: todos.length + 1,
        title,
        completed: false
    }
    const updateTodos = [...todos, newTodo]
    saveTodos(updateTodos)
    return newTodo
}   

// update todo
export function updateTodo(todo: Todo): Todo {
    const todos = getTodos()
    const updateTodos = todos.map(t => t.id === todo.id ? todo : t)
    saveTodos(updateTodos)
    return todo
}

// delete todo
export function deleteTodo(id: number): void {
    const todos = getTodos()
    const updateTodos = todos.filter(t => t.id !== id)
    saveTodos(updateTodos)
}
