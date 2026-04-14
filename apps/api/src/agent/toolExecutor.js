import { getToolByName } from "../tools/index.js";
import { isToolAllowed } from "./policies/safety.policy.js";

export async function executePlan(plan) {
  const results = [];

  for (const step of plan.steps || []) {
    if (!isToolAllowed(step.tool)) {
      results.push({
        tool: step.tool,
        error: "TOOL_NOT_ALLOWED",
      });
      continue;
    }

    const tool = getToolByName(step.tool);

    if (!tool) {
      results.push({
        tool: step.tool,
        error: "TOOL_NOT_FOUND",
      });
      continue;
    }

    const output = await tool.execute(step.input || {});
    results.push({ tool: step.tool, output });
  }

  return results;
}