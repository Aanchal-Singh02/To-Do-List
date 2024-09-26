document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const allTasksBtn = document.getElementById('task1');
    const pendingTasksBtn = document.getElementById('task2');
    const completedTasksBtn = document.getElementById('task3');

    // Load tasks from local storage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => createTaskElement(task));

    // Add task event listener
    addBtn.addEventListener('click', () => {
        const taskText = todoInput.value;
        if (taskText) {
            const newTask = { id: Date.now(), text: taskText, completed: false };
            createTaskElement(newTask);
            saveTask(newTask);
            todoInput.value = ''; // Clear the input field
        }
    });

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskText = todoInput.value;
            if (taskText) {
                const newTask = { id: Date.now(), text: taskText, completed: false };
                createTaskElement(newTask);
                saveTask(newTask);
                todoInput.value = ''; // Clear the input field
            }
        }
    });

    // Create task element
    function createTaskElement(task) {
        const li = document.createElement('li');
        li.classList.add(task.completed ? 'completed' : 'pending');

        // Create Edit button
        const editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.textContent = '✏️';

        // Create Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = '❌';

        // Create Complete button
        const compBtn = document.createElement('button');
        compBtn.classList.add('compBtn');
        compBtn.textContent = '✅';

        // Task text node
        const taskText = document.createElement('span');
        taskText.textContent = task.text;

        // Edit button event listener
        editBtn.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = task.text;
            // Replace task text with input field
            li.replaceChild(input, taskText);

            // Save edited task on input blur or pressing Enter
            input.addEventListener('blur', () => finishEditing(input.value, task, taskText, li));
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    finishEditing(input.value, task, taskText, li);
                }
            });
        });

        // Delete button event listener
        deleteBtn.addEventListener('click', () => {
            removeTask(task);
            todoList.removeChild(li);
        });

        // Complete button event listener
        compBtn.addEventListener('click', () => {
            if (!task.completed) { // Only mark as completed if not already completed
                task.completed = true;
                li.classList.remove('pending');
                li.classList.add('completed');
                updateTask(task);
            }
        });

        // Append buttons and task text
        li.appendChild(editBtn);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        li.appendChild(compBtn);
        todoList.appendChild(li);
    }

    // Save task to local storage
    function saveTask(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Remove task from local storage
    function removeTask(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = tasks.filter(t => t.id !== task.id);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Update task in local storage
    function updateTask(updatedTask) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = tasks.map(t => t.id === updatedTask.id ? updatedTask : t);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Finish editing task
    function finishEditing(newTaskText, task, taskText, li) {
        taskText.textContent = newTaskText;
        li.replaceChild(taskText, li.firstChild.nextSibling);

        // Update the task object with the new text
        task.text = newTaskText;

        // Update local storage with the edited task
        updateTask(task);
    }

    // Filter tasks
    allTasksBtn.addEventListener('click', () => {
        filterTasks('all');
    });

    pendingTasksBtn.addEventListener('click', () => {
        filterTasks('pending');
    });

    completedTasksBtn.addEventListener('click', () => {
        filterTasks('completed');
    });

    // Filter task list based on status
    function filterTasks(status) {
        const tasks = Array.from(todoList.children);
        tasks.forEach(task => {
            switch (status) {
                case 'all':
                    task.style.display = 'flex';
                    break;
                case 'pending':
                    task.style.display = task.classList.contains('pending') ? 'flex' : 'none';
                    break;
                case 'completed':
                    task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                    break;
            }
        });
    }

    // Clear all tasks
    document.getElementById('clearing').addEventListener('click', () => {
        clearALL();
    });

    function clearALL() {
        todoList.innerHTML = ''; // Remove all tasks from the UI
        localStorage.removeItem('tasks'); // Clear tasks from local storage
    }
});
