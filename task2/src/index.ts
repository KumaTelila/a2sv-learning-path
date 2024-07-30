interface Todo {
    id: number;
    title: string;
  }
  
  const taskInput = document.getElementById("task") as HTMLInputElement;
  const tasksList = document.getElementById("tasksList") as HTMLUListElement;
  let todos: Todo[] = [];
  let id = 1;
  
  function addTask() {
    const taskValue = taskInput.value.trim();
    if (taskValue) {
      const newTodo: Todo = { id: id++, title: taskValue };
      todos.push(newTodo);
      renderPage();
      taskInput.value = '';
    }
  }
  
  function removeTask(id: number) {
    todos = todos.filter(todo => todo.id !== id);
    renderPage();
  }
  
  function editTask(id: number) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      const newTitle = prompt("Edit the task", todo.title);
      if (newTitle !== null && newTitle.trim() !== '') {
        todo.title = newTitle.trim();
        renderPage();
      }
    }
  }
  
  function renderPage() {
    tasksList.innerHTML = '';
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.className = 'list-group-item mb-2';
  
      const buttonDelete = document.createElement('button');
      buttonDelete.textContent = 'Delete';
      buttonDelete.className = 'btn btn-danger btn-sm ml-2';
      buttonDelete.onclick = () => removeTask(todo.id);
  
      const buttonEdit = document.createElement('button');
      buttonEdit.textContent = 'Edit';
      buttonEdit.className = 'btn btn-success btn-sm ml-2';
      buttonEdit.onclick = () => editTask(todo.id);
  
      const div = document.createElement('div');
      div.className = 'd-flex justify-content-between align-items-center';
      div.appendChild(document.createTextNode(todo.id + ': ' + todo.title));
      div.appendChild(buttonEdit);
      div.appendChild(buttonDelete);
  
      li.appendChild(div);
      tasksList.appendChild(li);
    });
  }
  
  const addTaskButton = document.getElementById('addTaskButton') as HTMLButtonElement;
  addTaskButton.onclick = addTask;
  
  renderPage();
  