export function scoreMemoryQuality({ retrieved, used }) {
  if (!retrieved || retrieved.length === 0) return 0;
  if (!used) return 0.2;
  return Math.min(1, used / retrieved.length);
}