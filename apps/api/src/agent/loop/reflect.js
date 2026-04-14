import { reflectOnExecution } from "../../services/llm/llmClient.js";
import { shouldStoreMemory } from "../policies/memory.policy.js";
import { storeMemory } from "../../services/memory/episodicMemory.js";

export async function reflect(state, results) {
  const reflection = await reflectOnExecution({
    input: state.input,
    results,
  });

  if (shouldStoreMemory(reflection)) {
    await storeMemory({
      content: state.input,
      metadata: {
        intent: state.intent,
        results,
      },
    });
  }

  return reflection;
}