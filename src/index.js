document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')
  let task = document.getElementById('new-task-description').value
  let list = document.getElementById('list')
  let ul = document.getElementById('tasks')

  form.addEventListener("submit",(e) => {
    e.preventDefault();
    let li = document.createElement('li')
    li.inneText += task
    ul.appendChild(li)
  })
});
