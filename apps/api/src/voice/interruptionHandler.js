export function handleInterruption({ currentPlan, interruption }) {
  if (!interruption) return currentPlan;

  return {
    aborted: true,
    reason: "USER_INTERRUPTED",
  };
}