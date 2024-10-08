
// get html elements
const taskInput = document.getElementById("task");
const takssList = document.getElementById("tasksList");


// add tasks 
const addTask =  () => {
    const taskValue = taskInput.value.trim();
    if (taskValue) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = " X";
        li.textContent = taskValue
        span.addEventListener("click", () => {
            li.remove();
        });
        takssList.appendChild(li);
        li.appendChild(span);
        taskInput.value = '';
    }
};

