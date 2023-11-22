const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

function addTask() {
    const description = document.getElementById('description').value;
    const responsible = document.getElementById('responsible').value;
    const deadline = document.getElementById('deadline').value;

    if (description && responsible && deadline) {
        const taskItem = document.createElement('div');
        const date = new Date(deadline);
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
        <div class="task-item-col">
        <div class="tasklist-row">
            <div class="tasklist-info">
                <h4>Tarefa</h4>
                <div class="task-text">
                    <p>${description}</p>
                </div>
            </div>
        </div>
        <div class="tasklist-row">
            <div class="tasklist-col">
                <p><strong>Responsável:</strong> ${responsible}</p>
                <p><strong>Prazo:</strong> ${deadline}</p>
            </div>
        </div>
    </div>
    <div>
        <button onclick="completeTask(this)">Concluir</button>
        <button onclick="deleteTask(this)">Excluir</button>
    </div>
        `;

        taskList.appendChild(taskItem);

        // Limpar campos do formulário
        document.getElementById('description').value = '';
        document.getElementById('responsible').value = '';
        document.getElementById('deadline').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function completeTask(button) {
    const taskItem = button.parentNode.parentNode;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentNode.parentNode;
    taskList.removeChild(taskItem);
}
