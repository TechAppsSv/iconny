document.getElementById('formTaskstar').addEventListener('submit', saveTaskstar);

function saveTaskstar(e) {
  let titlestar = document.getElementById('titlestar').value;
  let descriptionstar = document.getElementById('descriptionstar').value;
  console.log(descriptionstar)

  let taskstar = {
    titlestar,
    descriptionstar
  };

  if(localStorage.getItem('tasksstar') === null) {
    let tasksstar = [];
    tasksstar.push(taskstar);
    localStorage.setItem('tasksstar', JSON.stringify(tasksstar));
  } else {
    let tasksstar = JSON.parse(localStorage.getItem('tasksstar'));
    tasksstar.push(taskstar);
    localStorage.setItem('tasksstar', JSON.stringify(tasksstar));
  }

  getTasksstar();
  document.getElementById('formTaskstar').reset();
  e.preventDefault();
}

function deleteTaskstar(titlestar) {
  console.log(titlestar)
  let tasksstar = JSON.parse(localStorage.getItem('tasksstar'));
  for(let i = 0; i < tasksstar.length; i++) {
    if(tasksstar[i].titlestar == titlestar) {
      tasksstar.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasksstar', JSON.stringify(tasksstar));
  getTasksstar();
}

function getTasksstar() {
  let tasksstar = JSON.parse(localStorage.getItem('tasksstar'));
  let tasksstarView = document.getElementById('tasksstar');
  tasksstarView.innerHTML = '';
  for(let i = 0; i < tasksstar.length; i++) {
    let titlestar = tasksstar[i].titlestar;
    let descriptionstar = tasksstar[i].descriptionstar;

    tasksstarView.innerHTML += `

      <tr>

        <td>
        <input type="text" readonly class="input-mono" style="width:90%; height:4vh;" value="${titlestar}">
        
       </td>
     
        <td><button id="buttonkit"><a href="${descriptionstar}" >Open Star <i class="bi bi-box-arrow-up-right"></i></a></button></td>
 
      

      </tr>

  
 `;
  }
}

getTasksstar();
