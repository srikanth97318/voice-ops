export function decideTurn({ isSpeaking, userSpoke }) {
  if (userSpoke) return "YIELD";
  if (isSpeaking) return "CONTINUE";
  return "SPEAK";
}
