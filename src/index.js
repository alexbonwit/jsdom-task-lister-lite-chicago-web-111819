document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form');
  form.addEventListener("submit", event => {
    event.preventDefault();

    let newTask = document.getElementById('new-task-description');
    let taskList = document.getElementById('tasks');

    let newListItem = document.createElement("li");
    newListItem.innerText = newTask.value;

    let deleteButton = document.createElement('button');
    deleteButton.innerText = "x";
    newListItem.append(deleteButton);
    deleteButton.addEventListener('click', event => deleteTask(event));

    taskList.appendChild(newListItem);
    form.reset();
  })

  function deleteTask(event) {
    let removedTask = event.target.parentNode;
    removedTask.remove();
  }

});