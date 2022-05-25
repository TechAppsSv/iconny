
document.getElementById('formTasktheme').addEventListener('submit', saveTasktheme);

function saveTasktheme(e) {
  let titletheme = document.getElementById('titletheme').value;
  let descriptiontheme = document.getElementById('descriptiontheme').value;
  console.log(descriptiontheme)

  let tasktheme = {
    titletheme,
    descriptiontheme
  };

  if(localStorage.getItem('taskstheme') === null) {
    let taskstheme = [];
    taskstheme.push(tasktheme);
    localStorage.setItem('taskstheme', JSON.stringify(taskstheme));
  } else {
    let taskstheme = JSON.parse(localStorage.getItem('taskstheme'));
    taskstheme.push(tasktheme);
    localStorage.setItem('taskstheme', JSON.stringify(taskstheme));
  }

  getTaskstheme();
  document.getElementById('formTasktheme').reset();
  e.preventDefault();
}

function deleteTasktheme(titletheme) {
  console.log(titletheme)
  let taskstheme = JSON.parse(localStorage.getItem('taskstheme'));
  for(let i = 0; i < taskstheme.length; i++) {
    if(taskstheme[i].titletheme == titletheme) {
      taskstheme.splice(i, 1);
    }
  }
  
  localStorage.setItem('taskstheme', JSON.stringify(taskstheme));
  getTaskstheme();
}

function getTaskstheme() {
  let taskstheme = JSON.parse(localStorage.getItem('taskstheme'));
  let tasksthemeView = document.getElementById('taskstheme');
  tasksthemeView.innerHTML = '';
  for(let i = 0; i < taskstheme.length; i++) {
    let titletheme = taskstheme[i].titletheme;
    let descriptiontheme = taskstheme[i].descriptiontheme;

    tasksthemeView.innerHTML += `

    <div class="alert alert-dark" role="alert">
    The ${titletheme} has been set
    
    <a href="#" onclick="deleteTasktheme('${titletheme}')"  class="btn btn-danger">Delete</a>
    
    </div>
`;
  }
}

getTaskstheme()