import { createTask } from "../services/tasks/taskService.js";

export function createTaskTool() {
  return {
    name: "CREATE_TASK",
    description: "Create a new task",
    async execute(input) {
      return createTask(input);
    },
  };
}
``