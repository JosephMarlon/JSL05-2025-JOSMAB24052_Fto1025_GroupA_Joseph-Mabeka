/**
 * Manages task operations and rendering
 * @module TaskManager
 */

import { saveTasks, loadTasks } from './storage.js';

let tasks = [];
let currentId = 13; // Match initial data IDs

/**
 * Initializes the task board
 */
export const initializeBoard = () => {
  tasks = loadTasks();
  
  // Seed initial data if empty
  if (tasks.length === 0) {
    tasks = initialTasks;
    saveTasks(tasks);
  }
  
  renderTasks();
};

/**
 * Renders tasks to the DOM
 */
export const renderTasks = () => {
  // Clear existing tasks
  document.querySelectorAll('.tasks-container').forEach(container => {
    container.innerHTML = '';
  });

  // Render new tasks
  tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    getColumnByStatus(task.status).appendChild(taskElement);
  });
};

/**
 * Creates a new task
 * @param {Object} taskData - Task data {title, description, status}
 */
export const createTask = (taskData) => {
  const newTask = {
    id: ++currentId,
    ...taskData,
    createdAt: new Date().toISOString()
  };
  
  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks();
};