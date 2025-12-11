# 📝 React To-Do List Application

This project is a simple To-Do List application built with React, demonstrating core concepts of state management, component structure, form validation, and data persistence.

## Features

* **Add Tasks:** Add new tasks with a required name and description.
* **Edit Tasks:** Click on any task item or the 'Edit' button to update its details.
* **Delete Tasks:** Delete tasks with a confirmation prompt.
* **Toggle Completion:** Mark tasks as active or completed, with visual distinction (light green background and strikethrough).
* **Filtering:** Filter tasks to view 'All', 'Active', or 'Completed' tasks.
* **Persistence:** Tasks are automatically saved to your browser's `localStorage` and loaded when the application starts.
* **Validation:** Form validation ensures task name and description are not empty.

## How to Run Locally

1.  **Clone or Download:** Get the project files into a local directory.
2.  **Navigate to the Directory:**
    ```bash
    cd /path/to/your/todo-app
    ```
3.  **Install Dependencies:** Install React, React DOM, and the styling libraries:
    ```bash
    npm install
    npm install react-bootstrap bootstrap
    ```
4.  **Start the Application:**
    ```bash
    npm start
    ```
    The application should open automatically in your browser at `http://localhost:3000`.

## Implementation Details

* **State Management:** Uses React's built-in `useState` and `useCallback` for efficient state updates and handler memoization.
* **Data Persistence:** The `useEffect` hook is used to synchronize the `tasks` state with `localStorage` on every change.
* **Styling:** Uses the **React-Bootstrap** library for a clean, responsive layout.
