
document.getElementById('formTask8').addEventListener('submit', saveTask8);

function saveTask8(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  console.log(description)

  let task8 = {
    title,
    description
  };

  if(localStorage.getItem('tasks8') === null) {
    let tasks8 = [];
    tasks8.push(task8);
    localStorage.setItem('tasks8', JSON.stringify(tasks8));
  } else {
    let tasks8 = JSON.parse(localStorage.getItem('tasks8'));
    tasks8.push(task8);
    localStorage.setItem('tasks8', JSON.stringify(tasks8));
  }

  getTasks8();
  document.getElementById('formTask8').reset();
  e.preventDefault();
}

function deleteTask8(title) {
  console.log(title)
  let tasks8 = JSON.parse(localStorage.getItem('tasks8'));
  for(let i = 0; i < tasks8.length; i++) {
    if(tasks8[i].title == title) {
      tasks8.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks8', JSON.stringify(tasks8));
  getTasks8();
}

function getTasks8() {
  let tasks8 = JSON.parse(localStorage.getItem('tasks8'));
  let tasks8View = document.getElementById('tasks8');
  tasks8View.innerHTML = '';
  for(let i = 0; i < tasks8.length; i++) {
    let title = tasks8[i].title;
    let description = tasks8[i].description;

    tasks8View.innerHTML += `
    <div class="card mb-3">
        <div class="card-body">
      <input type="text" id="title" class="input-mono" style="width: 50%; padding: 3%;" disabled value="${title}" >
      <br>
      
      <p>
          <a href="${description}"  class="btn btn-primary ml-5">Open Page</a>
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Delete</a>

          </p>
        </div>
      </div>

    `;
  }
}

getTasks8()