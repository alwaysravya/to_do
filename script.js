function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Strike through on click
        li.onclick = function() {
            li.classList.toggle('completed');
        };
        
        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };
        
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

