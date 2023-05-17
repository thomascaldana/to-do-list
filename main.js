const toDoList = [];

const addButton = document.querySelector('.js-add-button');
const taskInput = document.querySelector('input[type="text"]');
const dateInput = document.querySelector('input[type="date"]');
const listContainer = document.querySelector('.list-container');

function addToDo() {
  const task = taskInput.value;
  const date = dateInput.value;
  
  if (task !== '' && date !== '') {
    const listItem = document.createElement('div');
    const taskText = document.createElement('div');
    const dateText = document.createElement('div');
    const deleteButton = document.createElement('button');
    
    listItem.classList.add('list-item');
    taskText.classList.add('task-description')
    dateText.classList.add('date-description')
    taskText.textContent = task;
    dateText.textContent = date;
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.classList.add('js-delete-button');
    
    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });
    
    listItem.appendChild(taskText);
    listItem.appendChild(dateText);
    listItem.appendChild(deleteButton);
    
    listContainer.appendChild(listItem);
    
    toDoList.push({ task, date });
    
    taskInput.value = '';
    dateInput.value = '';
  }
}

addButton.addEventListener('click', addToDo);