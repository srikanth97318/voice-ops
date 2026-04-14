import { searchMemory } from "../services/memory/semanticMemory.js";

export function searchMemoryTool() {
  return {
    name: "SEARCH_MEMORY",
    description: "Search semantic memory",
    async execute(input) {
      return searchMemory(input.query);
    },
  };
}
