document.addEventListener('DOMContentLoaded', function() {
    // Selecionar elementos do DOM
    const form = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Array para armazenar as tarefas
    let tasks = [];
  
    // Função para adicionar uma nova tarefa à lista
    function addTask(taskText) {
      const task = {
        id: Date.now(),
        text: taskText,
        completed: false
      };
  
      tasks.push(task);
      renderTask(task);
    }
  
    // Função para exibir uma tarefa na lista
    function renderTask(task) {
      const taskItem = document.createElement('li');
      taskItem.className = 'list-group-item';
      taskItem.innerHTML = `
        <input type="checkbox" class="task-check">
        <span>${task.text}</span>
        <button class="btn btn-danger btn-sm float-right delete-task">Remover</button>
      `;
  
      const taskCheckbox = taskItem.querySelector('.task-check');
      const deleteButton = taskItem.querySelector('.delete-task');
  
      // Evento para marcar/desmarcar a tarefa como concluída
      taskCheckbox.addEventListener('change', function() {
        task.completed = taskCheckbox.checked;
        taskItem.classList.toggle('completed');
      });
  
      // Evento para remover a tarefa da lista
      deleteButton.addEventListener('click', function() {
        removeTask(task.id);
        taskItem.remove();
      });
  
      taskList.appendChild(taskItem);
    }
  
    // Função para remover uma tarefa da lista
    function removeTask(taskId) {
      tasks = tasks.filter(task => task.id !== taskId);
    }
  
    // Evento de envio do formulário
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
        taskInput.focus();
      }
    });
  });
  