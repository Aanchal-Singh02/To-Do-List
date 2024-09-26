```
# To-Do List Application

This is a simple To-Do List application built with HTML, CSS, and JavaScript. It allows users to add, edit, delete, mark as complete, and filter tasks. The application also uses local storage to persist the tasks, so they are available even after the browser is closed.

## Features

- **Add Tasks:** Users can add new tasks to the list by typing the task description in the input field and clicking the "Add Task" button.
- **Edit Tasks:** Existing tasks can be edited by clicking the edit button (✏️) next to the task. The task text will be replaced with an input field, allowing users to modify the task description.
- **Delete Tasks:** Tasks can be deleted by clicking the delete button (❌) next to the task.
- **Mark as Complete:** Tasks can be marked as complete by clicking the complete button (✅). Completed tasks are visually distinguished from pending tasks.
- **Filter Tasks:** Users can filter the displayed tasks based on their status:
    - **All Tasks:** Displays all tasks, both pending and completed.
    - **Pending Tasks:** Displays only the tasks that are not yet completed.
    - **Completed Tasks:** Displays only the tasks that have been marked as complete.
- **Clear All Tasks:** All tasks in the list can be cleared by clicking the "Clear All" button.
- **Local Storage Persistence:** The application stores the tasks in the browser's local storage, so they are preserved even after the browser window is closed.

## Technologies Used

- HTML
- CSS
- JavaScript

## File Structure

- `index.html`: Contains the HTML structure of the To-Do List application.
- `style.css`: Contains the CSS styles for the application's appearance.
- `script.js`: Contains the JavaScript code that handles user interactions, task management, and local storage persistence.

## How to Use

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser.
3. Start adding, editing, deleting, and completing your tasks.

## Functionality Breakdown

### `script.js`

- **Event Listeners:** The code sets up event listeners for various user interactions, such as adding tasks, editing tasks, deleting tasks, marking as complete, filtering tasks, and clearing all tasks.
- **Task Management:** The script handles the creation, editing, deletion, and updating of tasks. It uses an array to store the tasks and updates the UI accordingly.
- **Local Storage:** The code uses `localStorage` to store the tasks persistently. The tasks are loaded from local storage when the page loads, and any changes made to the tasks are saved back to local storage.
- **UI Updates:** The script updates the user interface dynamically based on user interactions and task status changes. It adds, removes, and updates elements in the DOM as needed.
- **Filtering:** The code filters the displayed tasks based on the selected filter option (all, pending, or completed).
- **Clearing All Tasks:** The `clearALL()` function removes all tasks from both the UI and local storage.

### `index.html`

- **Structure:** The HTML file defines the structure of the To-Do List, including the input field, buttons, and task list.
- **IDs and Classes:** Elements in the HTML have IDs and classes that are used by the CSS and JavaScript to style and manipulate them.

### `style.css`

- **Styling:** The CSS file styles the appearance of the To-Do List, including colors, fonts, layout, and responsive behavior.

## Future Improvements

- **Due Dates:** Add functionality to set due dates for tasks.
- **Priorities:** Allow users to assign priorities to tasks.
- **Categorization:** Enable users to categorize tasks.
- **User Authentication:** Implement user accounts to allow multiple users to manage their tasks separately.
- **Synchronization:** Synchronize tasks across multiple devices.
```