import { env } from "../../config/env.js";

async function callLLM({ system, user }) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.LLM_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      temperature: 0.2,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }

  const data = await res.json();
  return data.choices[0].message.content;
}

export async function classifyIntent(input) {
  const output = await callLLM({
    system: "You classify user intent into a short structured label.",
    user: input,
  });

  return output.trim();
}

export async function generatePlan({ input, intent }) {
  const output = await callLLM({
    system: "You create a JSON execution plan based on user intent.",
    user: JSON.stringify({ input, intent }),
  });

  return JSON.parse(output);
}

export async function reflectOnExecution({ input, results }) {
  const output = await callLLM({
    system: "You evaluate task execution and produce a user-facing response.",
    user: JSON.stringify({ input, results }),
  });

  return JSON.parse(output);
}
