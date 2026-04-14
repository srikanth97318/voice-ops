export async function perceive(input, metadata) {
  return {
    text: input.transcript || "",
    raw: input,
    metadata,
    timestamp: Date.now(),
  };
}
``