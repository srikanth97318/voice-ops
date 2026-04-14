import { createTaskTool } from "./createTask.tool.js";
import { updateTaskTool } from "./updateTask.tool.js";
import { searchMemoryTool } from "./searchMemory.tool.js";
import { storeMemoryTool } from "./storeMemory.tool.js";
import { askUserTool } from "./askUser.tool.js";
import { noopTool } from "./noop.tool.js";

export const tools = [
  createTaskTool(),
  updateTaskTool(),
  searchMemoryTool(),
  storeMemoryTool(),
  askUserTool(),
  noopTool(),
];

export function getToolByName(name) {
  return tools.find(t => t.name === name);
}
``