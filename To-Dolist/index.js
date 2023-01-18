const form = document.querySelector('form');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();

  if (taskInput.value === '') return;

  const task = document.createElement('li');
  task.innerText = taskInput.value;

  taskList.appendChild(task);
  taskInput.value = '';

  task.addEventListener('click', toggleCompleted);
}

function toggleCompleted(e) {
  e.target.classList.toggle('completed');
}
