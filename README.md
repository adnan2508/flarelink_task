# Task Manager Application

## 📋 Application Overview

The **Task Manager** is a React-based web application designed to help users manage tasks efficiently. It provides features to add, search, delete, and prioritize tasks. Tasks are stored in the browser's local storage, ensuring persistence even after refreshing the page.

### ✨ Features:
1. **Add Tasks**: Input a task title and add it to the list.
2. **Delete Tasks**: Remove a task when it's no longer needed.
3. **Task Persistence**: Tasks are saved in local storage for continued availability.
4. **Search Tasks**: Search for specific tasks using a search bar.
5. **Mark Completion**: Mark tasks as completed or incomplete.
6. **Set Priority**: Assign priority levels (`High`, `Medium`, `Low`) to tasks.
7. **Sort Tasks**: Sort tasks based on priority or completion status.

---

## 🚀 Setup and Launch Process

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14+)
- [npm](https://www.npmjs.com/) (or yarn)

### Steps to Run Locally:
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-repository-url/task-manager.git
   cd task-manager
   ```
2. Install Dependencies: 
  ```bash
  npm install
  npm start
  ```
### This command will launch the application on http://localhost:5173/.
3. Build for Production (Optional):
```bash 
npm run build
```
### This creates a production-ready build in the build directory.

### 🛠️ Assumptions Made During Development
1. Priority System: The priority levels are limited to High, Medium, and Low. These are sorted as High → Medium → Low.
2. Task Data: Tasks have the following structure:
```bash 
{
  "id": 123456789,
  "title": "Sample Task",
  "completed": false,
  "priority": "Medium"
}
```
3. Persistence: Local storage is used to persist tasks, and there’s no backend integration.
4. Animations: Animations are applied to task actions (like hover effects and scaling) using Tailwind CSS.
5. Scalability: The app is designed to handle basic task management needs. For larger-scale use, a backend system might be required.

![image alt](https://i.ibb.co.com/0CbXLbp/Atto-cinematic-8k-cyberpunk-ultra-realistic-superheroic-Ironman-6eeaed6e-6c25-4971-a735-4449f9eb9926.png)

