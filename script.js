// Buscar as referências dos elementos HTML
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Função para adicionar uma nova tarefa
function addTask() {
  // Retomar a tarefa digitada pelo usuário
  const taskDescription = taskInput.value;

  // Criar um novo item de lista e adiciona-lo à lista
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item';
  listItem.innerHTML = `
    <span>${taskDescription}</span>
    <i class="fas fa-trash-alt trash-icon"></i>
  `;
  todoList.appendChild(listItem);

  // Limpar o campo de entrada de texto
  taskInput.value = '';

  // Adicionar um event listener ao ícone de lixeira
  const trashIcon = listItem.querySelector('.trash-icon');
  trashIcon.addEventListener('click', function() {
    listItem.remove();
  });
}

// Adicionar um event listener ao botão de adicionar
addButton.addEventListener('click', addTask);

// Adicionar um event listener ao campo de entrada de texto quando apertar enter
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevenir o comportamento padrão do enter
    addTask(); // Chamar a função de adicionar tarefa
  }
});
