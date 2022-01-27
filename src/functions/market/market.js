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

    tasksView.innerHTML += `
    <br>
    <br>
 
   
    <table class="table"  style="font-family: 'Jost', sans-serif;">
    <thead>
      <tr>
 
        <th scope="col">Title</th>
        <th scope="col">Note</th>
        <th scope="col">URL</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>

        <td>${title}</td>
        <td>       <textarea name="" id="" cols="30" rows="90" style="height:9vh;" disabled>${description}</textarea></td>
        <td><a href="${description}" class="btn btn-dark" >Open Link</a></td>
        <td>
        <a href="#" class="btn btn-danger "onclick="deleteTask('${title}')" >Delete Notely</a>
        </td>

      </tr>

    </tbody>
  </table>
      </div>  
 `;
  }
}

getTasks();
