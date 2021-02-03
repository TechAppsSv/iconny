document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  console.log(description)

  let task = {
    title,
    description
  };

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += `<div class="card mb-3">
    <div class="card-body" style="background:#ececec;border:#ececec;">
      <p ><h4 style="text-align:center;">${title}</h4> 
      <br>
     <p style="text-align:center;"> ${description}</p>
      <br>
      <a href="#" onclick="deleteTask('${title}')" style="color:black;"class="btn  ml-5">Eliminar</a>
      <a href="${description}" class="btn ml-10" style="color:black; height:10vh;">Si es un link su nota presione aqui  </a>
      </p>
    </div>
  </div>`;
}
}


getTasks();
