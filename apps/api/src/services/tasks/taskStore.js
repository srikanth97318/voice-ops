import { randomUUID } from "crypto";
import { Task } from "../../models/Task.js";

const tasks = new Map();

export function createTaskRecord(data) {
  const task = new Task({
    id: randomUUID(),
    title: data.title,
    status: "open",
    metadata: data.metadata || {},
    createdAt: new Date().toISOString(),
  });

  tasks.set(task.id, task);
  return task;
}

export function updateTaskRecord({ id, updates }) {
  const task = tasks.get(id);
  if (!task) return null;

  Object.assign(task, updates);
  return task;
}

export function getAllTasks() {
  return Array.from(tasks.values());
}

export function getTaskById(id) {
  return tasks.get(id) || null;
}