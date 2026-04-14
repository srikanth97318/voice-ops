export function createAgentState() {
  return {
    input: "",
    intent: null,
    plan: null,
    toolResults: [],
    metadata: {},
    timestamp: null,
  };
}