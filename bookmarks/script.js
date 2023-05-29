// Pegar referência dos elementos do HTML
const linkTitleInput = document.getElementById('link-title');
const linkUrlInput = document.getElementById('link-url');
const addButton = document.getElementById('add-button');
const linkList = document.getElementById('link-list');

// Adicionar um event listener ao botão salvar
addButton.addEventListener('click', function() {
  // Retrieve the link title and URL from the input fields
  const linkTitle = linkTitleInput.value;
  const linkUrl = linkUrlInput.value;

  // Criar uma nova lista com o item clicável
  const listItem = document.createElement('a');
  listItem.className = 'list-group-item list-group-item-action';
  listItem.textContent = linkTitle;
  listItem.href = linkUrl;
  linkList.appendChild(listItem);

  // Limpar os campos de input
  linkTitleInput.value = '';
  linkUrlInput.value = '';
});
