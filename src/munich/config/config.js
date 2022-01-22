
document.getElementById('formTask2').addEventListener('submit', saveTask2);

function saveTask2(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  console.log(description)

  let task2 = {
    title,
    description
  };

  if(localStorage.getItem('tasks2') === null) {
    let tasks2 = [];
    tasks2.push(task2);
    localStorage.setItem('tasks2', JSON.stringify(tasks2));
  } else {
    let tasks2 = JSON.parse(localStorage.getItem('tasks2'));
    tasks2.push(task2);
    localStorage.setItem('tasks2', JSON.stringify(tasks2));
  }

  getTasks2();
  document.getElementById('formTask2').reset();
  e.preventDefault();
}

function deleteTask2(title) {
  console.log(title)
  let tasks2 = JSON.parse(localStorage.getItem('tasks2'));
  for(let i = 0; i < tasks2.length; i++) {
    if(tasks2[i].title == title) {
      tasks2.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks2', JSON.stringify(tasks2));
  getTasks2();
}

function getTasks2() {
  let tasks2 = JSON.parse(localStorage.getItem('tasks2'));
  let tasks2View = document.getElementById('tasks2');
  tasks2View.innerHTML = '';
  for(let i = 0; i < tasks2.length; i++) {
    let title = tasks2[i].title;
    let description = tasks2[i].description;

    tasks2View.innerHTML += `
    <div class="alert alert-dark" role="alert">
Your theme has been set

<a href="#" onclick="deleteTask2('${title}')"  class="btn btn-danger">Delete</a>

</div>

    `;
  }
}

getTasks2()