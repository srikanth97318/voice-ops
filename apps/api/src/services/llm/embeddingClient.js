import { env } from "../../config/env.js";

export async function embed(text) {
  const res = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.LLM_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "text-embedding-3-small",
      input: text,
    }),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const data = await res.json();
  return data.data[0].embedding;
}