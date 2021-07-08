
document.getElementById('formTask4').addEventListener('submit', saveTasks4);

function saveTasks4(e) {
  let title4 = document.getElementById('title4').value;
  let description4 = document.getElementById('description4').value;
  console.log(description4)

  let task4 = {
    title4,
    description4
  };

  if(localStorage.getItem('tasks4') === null) {
    let tasks4 = [];
    tasks4.push(task4);
    localStorage.setItem('tasks4', JSON.stringify(tasks4));
  } else {
    let tasks4 = JSON.parse(localStorage.getItem('tasks4'));
    tasks4.push(task4);
    localStorage.setItem('tasks4', JSON.stringify(tasks4));
  }

  getTasks4();
  document.getElementById('formTasks4').reset();
  e.preventDefault();
}

function deleteTasks4(title4) {
  console.log(title4)
  let tasks4 = JSON.parse(localStorage.getItem('tasks4'));
  for(let i = 0; i < tasks4.length; i++) {
    if(tasks4[i].title4 == title4) {
      tasks4.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks4', JSON.stringify(tasks4));
  getTasks4();
}

function getTasks4() {
  let tasks4 = JSON.parse(localStorage.getItem('tasks4'));
  let tasks4View = document.getElementById('tasks4');
  tasks4View.innerHTML = '';
  for(let i = 0; i < tasks4.length; i++) {
    let title4 = tasks4[i].title4;
    let description4 = tasks4[i].description4;

    tasks4View.innerHTML += `<div >
        <div class="card-body" style="background:#1c1c1c  ;border:black; border-radius:10px;">

          <br>
        
          <a href="#" onclick="deleteTasks4('${title4}')" style="color:white;" class="btn ml-5">Toca aqui para eliminar ${title4} </a>
         
          </p>
        </div>
      </div>`;
  }
}

getTasks4()