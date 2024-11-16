import React, { useState, useEffect } from 'react';


function App() {
  return (
    <>
      <div className="max-w-md mx-auto p-5 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-5">Task Manager</h1>

        {/* input tag */}
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Add a new task..."
            // value={taskTitle}
            // onChange={(e) => setTaskTitle(e.target.value)}
            className="w-3/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
          />
          <button
            // onClick={addTask}
            className="w-1/4 bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105"
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
