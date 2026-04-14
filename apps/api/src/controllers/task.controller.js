import { createTask, listTasks } from "../services/tasks/taskService.js";

export async function createTaskHandler(req, res, next) {
  try {
    const task = createTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
}

export async function listTasksHandler(_req, res, next) {
  try {
    res.json(listTasks());
  } catch (err) {
    next(err);
  }
}
``