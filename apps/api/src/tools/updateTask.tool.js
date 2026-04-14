import { updateTask } from "../services/tasks/taskService.js";

export function updateTaskTool() {
  return {
    name: "UPDATE_TASK",
    description: "Update an existing task",
    async execute(input) {
      return updateTask(input);
    },
  };
}
``