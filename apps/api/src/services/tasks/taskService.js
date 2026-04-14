import {
  createTaskRecord,
  updateTaskRecord,
  getAllTasks,
  getTaskById,
} from "./taskStore.js";

export function createTask(input) {
  if (!input.title) {
    throw new Error("Task title required");
  }

  return createTaskRecord(input);
}

export function updateTask(input) {
  if (!input.id) {
    throw new Error("Task id required");
  }

  const task = updateTaskRecord({
    id: input.id,
    updates: input.updates || {},
  });

  if (!task) {
    throw new Error("Task not found");
  }

  return task;
}

export function listTasks() {
  return getAllTasks();
}

export function findTaskById(id) {
  return getTaskById(id);
}
``