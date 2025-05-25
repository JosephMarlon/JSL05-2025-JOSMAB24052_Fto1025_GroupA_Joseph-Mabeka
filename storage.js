/**
 * Manages local storage operations for tasks
 * @module Storage
 */

const STORAGE_KEY = 'kanban_tasks';

/**
 * Saves tasks to local storage
 * @param {Array} tasks - Array of task objects
 */
export const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

/**
 * Loads tasks from local storage
 * @returns {Array} Array of task objects
 */
export const loadTasks = () => {
  const storedTasks = localStorage.getItem(STORAGE_KEY);
  return storedTasks ? JSON.parse(storedTasks) : [];
};