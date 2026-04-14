import { randomUUID } from "crypto";
import { qdrant } from "./qdrantClient.js";
import { embed } from "../llm/embeddingClient.js";

const COLLECTION = "episodic_memory";

export async function storeMemory({ content, metadata }) {
  const id = randomUUID();
  const vector = await embed(content);

  await qdrant.upsert(COLLECTION, {
    wait: true,
    points: [
      {
        id,
        vector,
        payload: {
          content,
          metadata,
          timestamp: Date.now(),
        },
      },
    ],
  });

  return { id };
}
