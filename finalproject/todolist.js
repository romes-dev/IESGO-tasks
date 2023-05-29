document.addEventListener('DOMContentLoaded', function() {
    // Selecionar elementos do DOM
    const form = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const prioritySelect = document.getElementById('priority-select');
    const datetimeInput = document.getElementById('datetime-input');
    const taskList = document.getElementById('task-list');
  
    // Array para armazenar as tarefas
    let tasks = [];
  
    // Função para adicionar uma nova tarefa à lista
    function addTask(taskText, priority, datetime) {
      const task = {
        id: Date.now(),
        text: taskText,
        priority: priority,
        datetime: datetime,
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
        <span class="mr-2 ${getPriorityClass(task.priority)}">${getPriorityIcon(task.priority)}</span>
        <span>${task.text}</span>
        <span class="float-right">${formatDatetime(task.datetime)}</span>
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
  // Função para obter a classe de prioridade com base no valor selecionado
  function getPriorityClass(priority) {
    switch (priority) {
      case 'urgent':
        return 'priority-urgent';
      case 'confidential':
        return 'priority-confidential';
      case 'important':
        return 'priority-important';
      case 'normal':
      default:
        return 'priority-normal';
    }
  }

  // Função para obter o ícone da prioridade com base no valor selecionado
  function getPriorityIcon(priority) {
    switch (priority) {
      case 'urgent':
        return '<i class="fas fa-exclamation-circle"></i>';
      case 'confidential':
        return '<i class="fas fa-lock"></i>';
      case 'important':
        return '<i class="fas fa-star"></i>';
      case 'normal':
      default:
        return '';
    }
  }

  // Função para formatar a data e hora da tarefa
  function formatDatetime(datetime) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(datetime).toLocaleDateString('pt-BR', options);
  }

  // Evento de envio do formulário
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;
    const datetime = datetimeInput.value;

    if (taskText !== '') {
      addTask(taskText, priority, datetime);
      taskInput.value = '';
      prioritySelect.value = 'normal';
      datetimeInput.value = '';
      taskInput.focus();
    }
  });
});

   
  