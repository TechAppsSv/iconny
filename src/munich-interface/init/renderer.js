let closebtn = document.getElementById('closebtn');

closebtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.closeCurrentWindow();
});
