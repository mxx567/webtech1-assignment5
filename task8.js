const tasks = [];
const taskForm = document.getElementById('taskForm');
const taskTitle = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();
    if (!title || !description) return;

    tasks.push({ title, description, completed: false });
    taskForm.reset();
    renderTasks();

});

function renderTasks() {
    taskList.replaceChildren();
    tasks.forEach((task, index) => {
    const item = document.createElement('li');
    item.className = 'list-group-item'
    
    const header = document.createElement('div')
    header.className = 'd-flex align-items-center justify-content-between border-bottom pb-2 mb-2'
    const title = document.createElement('span')
    title.className = 'task-heading'
    title.textContent = task.title
    



    const actions = document.createElement('div');
    actions.className = 'd-flex align-items-center'
    const completeButton = document.createElement('button')
    completeButton.type = 'button'
    completeButton.textContent = task.completed ? 'Reset' : 'Complete'
    completeButton.addEventListener('click', () => {
        tasks[index].completed = !tasks[index].completed
        renderTasks()
    });

    const deleteButton = document.createElement('button')
    deleteButton.type = 'button'
    deleteButton.textContent = 'Delete'
    deleteButton.title = 'Delete task'
    deleteButton.addEventListener('click', () => {
        tasks.splice(index, 1)
        renderTasks()
    });

    actions.append(completeButton, deleteButton)
    header.append(title, actions)
    const description = document.createElement('div')
    description.className = 'task-description'
    description.textContent = task.description
    title.style.textDecoration = task.completed ? 'line-through' : 'none'
    description.style.textDecoration = task.completed ? 'line-through' : 'none'
    item.append(header, description)
    taskList.appendChild(item)
    });
}