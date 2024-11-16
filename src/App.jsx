import React, { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskTitle.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
      priority: "Medium",
    };
    setTasks([...tasks, newTask]);
    setTaskTitle("");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const setPriority = (id, priority) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, priority } : task
    );
    setTasks(updatedTasks);
  };

  const getFilteredTasks = () => {
    let filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === "priority") {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      filteredTasks = filteredTasks.sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
      );
    } else if (sortBy === "completed") {
      filteredTasks = filteredTasks.sort((a, b) => a.completed - b.completed);
    }

    return filteredTasks;
  };

  return (
    <>
      <div className="max-w-md mx-auto p-5 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-5">Task Manager</h1>

        {/* input tag */}
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Add a new task..."
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="w-3/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
          />
          <button
            onClick={addTask}
            className="w-1/4 bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105"
          >
            Add Task
          </button>
        </div>

        {/* Search Tag */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
          />
        </div>

        {/* Sorting tag */}
        <div className="mb-4">
          <label className="mr-2">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
          >
            <option value="">None</option>
            <option value="priority">Priority</option>
            <option value="completed">Completion Status</option>
          </select>
        </div>

        <ul className="space-y-3">
        {getFilteredTasks().map(task => (
          <li
            key={task.id}
            className={`p-3 border rounded-md flex justify-between items-center bg-white transition duration-300 transform ${
              task.completed ? 'bg-gray-100 opacity-70' : 'opacity-100'
            }`}
          >
            <span
              onClick={() => toggleCompletion(task.id)}
              className={`cursor-pointer transition duration-300 transform ${
                task.completed ? 'line-through text-gray-500' : 'text-black'
              } hover:scale-105`}
            >
              {task.title}
            </span>
            <div className="flex items-center">
              <select
                value={task.priority}
                onChange={(e) => setPriority(task.id, e.target.value)}
                className="p-1 border border-gray-300 rounded-md mr-2 focus:outline-none focus:border-blue-500 transition duration-300"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700 transition-transform duration-300 transform hover:scale-110"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}

export default App;
