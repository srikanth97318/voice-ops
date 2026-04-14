import { storeMemory } from "../services/memory/episodicMemory.js";

export function storeMemoryTool() {
  return {
    name: "STORE_MEMORY",
    description: "Store memory",
    async execute(input) {
      return storeMemory(input);
    },
  };
}