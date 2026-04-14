export function scoreMemory({ usageCount, recency }) {
  return usageCount * 0.7 + recency * 0.3;
}