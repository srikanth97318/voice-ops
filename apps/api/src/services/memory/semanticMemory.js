import crypto from "crypto";
import { qdrant } from "./qdrantClient.js";
import { embed } from "../llm/embeddingClient.js";

const COLLECTION = "semantic_memory";

export async function storeSemanticMemory({ content, metadata }) {
  const vector = await embed(content);

  await qdrant.upsert(COLLECTION, {
    wait: true,
    points: [
      {
        id: crypto.randomUUID(),
        vector,
        payload: {
          content,
          metadata,
          timestamp: Date.now(),
        },
      },
    ],
  });
}

export async function searchMemory(query) {
  const vector = await embed(query);

  const res = await qdrant.search(COLLECTION, {
    vector,
    limit: 5,
  });

  return res.map(r => r.payload);
}