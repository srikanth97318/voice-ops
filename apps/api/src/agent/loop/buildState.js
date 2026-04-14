import { createAgentState } from "../state/agentState.js";

export async function buildState(perception) {
  const state = createAgentState();
  state.input = perception.text;
  state.metadata = perception.metadata;
  state.timestamp = perception.timestamp;
  return state;
}
``