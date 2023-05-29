// Buscar as referências dos elementos HTML
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

//Função para adicionar uma tarefa
function addTask() {
    // Retorna o valor da tarefa digitada pelo usuário
    const taskDescription = taskInput.value;

    // Criar um novo item de lista e adicionar a lista
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHtml = `<span>${taskDescription}</span>; `;
    todoList.appendChild(listItem);

    // Limpar o campo de entrada de texto
    taskInput.value = '';

    // Adicionar um evento de clique para remover o item da lista
    const trashIcon = listItem.querySelector('.trash-icon');
    trashIcon.addEventListener('click', function () {
        listItem.remove();
    });
}

// Adicionar um event listener quando o usuário clicar no botão adicionar
addButton.addEventListener('click', addTask); 

// Adicionar um event listener quando o usuário pressionar a tecla enter
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
}
);