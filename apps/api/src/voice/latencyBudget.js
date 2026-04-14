export function createLatencyBudget(maxMs = 8000) {
  const start = Date.now();

  return {
    remaining() {
      return maxMs - (Date.now() - start);
    },
    exceeded() {
      return Date.now() - start > maxMs;
    },
  };
}
``