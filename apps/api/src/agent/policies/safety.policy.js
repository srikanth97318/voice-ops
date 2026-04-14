const BLOCKED_INTENTS = new Set([
  "DELETE_ALL_TASKS",
  "SHUTDOWN_SYSTEM",
]);

const BLOCKED_TOOLS = new Set([
  "DELETE_TASK",
]);

export function isIntentAllowed(intent) {
  return !BLOCKED_INTENTS.has(intent);
}

export function isToolAllowed(toolName) {
  return !BLOCKED_TOOLS.has(toolName);
}
``