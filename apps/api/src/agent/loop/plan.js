import { generatePlan } from "../../services/llm/llmClient.js";

export async function plan(state, intent) {
  const plan = await generatePlan({
    input: state.input,
    intent,
  });

  state.plan = plan;
  return plan;
}
``