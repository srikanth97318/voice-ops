export function calculateSuccess({ intent, results }) {
  if (!results || results.length === 0) return 0;

  const failures = results.filter(r => r.error).length;
  const successRate = 1 - failures / results.length;

  if (intent === "UNKNOWN") return successRate * 0.5;

  return Math.max(0, Math.min(1, successRate));
}