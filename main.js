const addButton = document.querySelector('.js-add-button');
const taskInput = document.querySelector('input[type="text"]');
const dateInput = document.querySelector('input[type="date"]');
const listContainer = document.querySelector('.list-container');

let toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

function addToDo() {
  const task = taskInput.value;
  const date = dateInput.value;

  if (task !== '' && date !== '') {
    const newItem = { task, date };
    toDoList.push(newItem);
    saveToDoList();

    renderToDoList();
    clearInputFields();
  }
}

function renderToDoList() {
  listContainer.innerHTML = '';
  toDoList.forEach((item) => {
    const listItem = createListItem(item);
    listContainer.appendChild(listItem);
  });
}

function createListItem(item) {
  const listItem = document.createElement('div');
  const taskText = document.createElement('div');
  const dateText = document.createElement('div');
  const deleteButton = document.createElement('button');

  listItem.classList.add('list-item');
  taskText.classList.add('task-description');
  dateText.classList.add('date-description');
  taskText.textContent = item.task;
  dateText.textContent = item.date;
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.classList.add('js-delete-button');

  deleteButton.addEventListener('click', function () {
    removeToDoItem(item);
  });

  listItem.appendChild(taskText);
  listItem.appendChild(dateText);
  listItem.appendChild(deleteButton);

  return listItem;
}

function removeToDoItem(item) {
  toDoList = toDoList.filter((todo) => todo !== item);
  saveToDoList();
  renderToDoList();
}

function saveToDoList() {
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function clearInputFields() {
  taskInput.value = '';
  dateInput.value = '';
}

addButton.addEventListener('click', addToDo);
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addToDo();
  }
})


renderToDoList();