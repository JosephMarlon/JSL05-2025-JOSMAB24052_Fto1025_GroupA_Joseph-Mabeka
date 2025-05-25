/**
 * Manages modal interactions
 * @module Modals
 */

import { createTask } from './taskManager.js';

/**
 * Initializes modal functionality
 */
export const initModals = () => {
  const addTaskBtn = document.getElementById('addTaskBtn');
  const addTaskModal = document.getElementById('addTaskModal');
  const taskForm = document.getElementById('taskForm');

  // Open Add Task Modal
  addTaskBtn.addEventListener('click', () => {
    addTaskModal.style.display = 'flex';
  });

  // Handle Form Submission
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newTask = {
      title: document.getElementById('taskTitle').value.trim(),
      description: document.getElementById('taskDescription').value.trim(),
      status: document.getElementById('taskStatus').value
    };
    
    if (newTask.title) {
      createTask(newTask);
      addTaskModal.style.display = 'none';
      taskForm.reset();
    }
  });

  // Close Modals
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop') || 
          e.target.classList.contains('close-modal')) {
        modal.style.display = 'none';
      }
    });
  });
};