export function shouldEscalate({ confidence, requiresConfirmation }) {
  if (requiresConfirmation) return true;
  if (confidence !== undefined && confidence < 0.4) return true;
  return false;
}