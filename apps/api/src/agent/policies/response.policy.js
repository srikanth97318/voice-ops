export function buildResponse(reflection) {
  return {
    text: reflection.userResponse,
    confidence: reflection.confidence ?? 0.5,
  };
}
``