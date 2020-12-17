document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.getElementById('submit')
  let task = document.getElementById('new-task-description').value
  let list = document.getElementById('list')
  let ul = document.getElementById('tasks')

  submit.addEventListener("submit",(e) => {
    e.preventDefault();
    let li = document.createElement('li')
    li.innerHTML = task
    ul.appendChild(li)
  })
});
