function toggleSubtaskIcons() {
  const subtaskInput = document.getElementById("addTaskSubTasks");
  const subtaskPlusIcon = document.getElementById("subtaskPlusIcon");
  const subtaskIcons = document.getElementById("subtaskIcons");

  if (subtaskInput.value.trim() !== "") {
    subtaskPlusIcon.style.display = "none"; 
    subtaskIcons.style.display = "inline";  
  } else {
    subtaskPlusIcon.style.display = "inline"; 
    subtaskIcons.style.display = "none"; 
  }
}

/**
 * 
 * Gets the text from the subtask input field. If the input is empty, it shows an alert.
 * If the input has text, it creates a new subtask and adds it to the list. Then, it clears the input field.
 * 
 */
function addSubtask() {
  const subtaskInput = document.getElementById('addTaskSubTasks');
  const subtaskList = document.getElementById('subtaskList');
  const subtaskValue = subtaskInput.value.trim();

  if (subtaskValue === '') {
    alert('Subtask cannot be empty!');
    return;
  }

  subtaskList.appendChild(createSubtaskElement(subtaskValue));
  subtaskInput.value = "";

  toggleSubtaskIcons();
}

function clearSubtaskInput(){
  const subtaskInput = document.getElementById('addTaskSubTasks');
  subtaskInput.value = "";

  toggleSubtaskIcons();
}

/**
 * Creates a new subtask element to display in the list.
 *
 * @param {string} subtaskValue - The text or name of the subtask to be displayed.
 * @returns {HTMLElement} The newly created list item element that contains the subtask and a remove button.
 */
function createSubtaskElement(subtaskValue) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
      <div class="subtaskContent">
        <div class="subtaskTextWrapper">
          <li class="bulletPoint">&#8226;</li>
          <li class="subtaskText">${subtaskValue}</li>
        </div>
        <div class="subtaskIcons">
          <img src="/assets/icon/add task/edit.png" class="subtaskIcon editSubtask">
          <img src="/assets/icon/add task/vector.png">
          <img src="/assets/icon/add task/delete.png" class="subtaskIcon removeSubtask">
          
        </div>
      </div>
      
  `;

  listItem.querySelector('.editSubtask').addEventListener('click', () => editSubtask(listItem, subtaskValue));
  listItem.querySelector('.removeSubtask').addEventListener('click', () => removeSubtask(listItem));
  return listItem;
}

function editSubtask(listItem, oldValue) {
  const subtaskContent = listItem.querySelector('.subtaskContent');
  const subtaskTextWrapper = listItem.querySelector('.subtaskTextWrapper');
  const subtaskIcons = listItem.querySelector('.subtaskIcons');

  subtaskContent.classList.add('editing');

  subtaskTextWrapper.innerHTML = `
    <input type="text" class="editSubtaskInput" value="${oldValue}">
  `;

  subtaskIcons.innerHTML = `
    <img src="/assets/icon/add task/delete.png" class="subtaskIcon removeSubtask">
    <img src="/assets/icon/add task/vector.png">
    <img src="/assets/icon/add task/done.png" class="subtaskIcon confirmEditSubtask">
  `;

  subtaskIcons.querySelector('.removeSubtask').addEventListener('click', () => removeSubtask(listItem));
  subtaskIcons.querySelector('.confirmEditSubtask').addEventListener('click', () => {
    const newValue = listItem.querySelector('.editSubtaskInput').value.trim();
    if (newValue === '') {
      alert('Subtask cannot be empty!');
      return;
    }

    subtaskContent.classList.remove('editing');

    listItem.replaceWith(createSubtaskElement(newValue));
  });
}


/**
 * Removes a subtask from the list.
 *
 * @param {HTMLElement} listItem - The subtask element to be removed from the list.
 */
function removeSubtask(listItem) {
  listItem.remove();
}