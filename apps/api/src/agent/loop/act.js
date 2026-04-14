import { executePlan } from "../toolExecutor.js";

export async function act(state, plan) {
  const results = await executePlan(plan);
  state.toolResults = results;
  return results;
}
``