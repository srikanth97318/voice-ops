import { classifyIntent } from "../../services/llm/llmClient.js";

export async function decideIntent(state) {
  const intent = await classifyIntent(state.input);
  state.intent = intent;
  return intent;
}
