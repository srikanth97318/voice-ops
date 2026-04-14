export function detectConfusion({ input, intent, reflection }) {
  if (!intent || intent === "UNKNOWN") return true;

  if (reflection?.confidence !== undefined && reflection.confidence < 0.4) {
    return true;
  }

  if (!input || input.trim().length < 3) {
    return true;
  }

  return false;
}