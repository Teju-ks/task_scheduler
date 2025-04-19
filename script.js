const form = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('taskName').value;
  const desc = document.getElementById('taskDesc').value;
  const date = document.getElementById('taskDate').value;

  const li = document.createElement('li');
  li.innerHTML = `
    <div>
      <strong>${name}</strong> - ${desc} <br>
      <small>Due: ${date}</small>
    </div>
    <button class="completeBtn">✓</button>
  `;

  taskList.appendChild(li);

  form.reset();

  li.querySelector('.completeBtn').addEventListener('click', () => {
    li.classList.add('completed');
    setTimeout(() => {
      li.remove();
    }, 1500);
  });
});
