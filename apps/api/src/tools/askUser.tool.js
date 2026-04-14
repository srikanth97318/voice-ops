export function askUserTool() {
  return {
    name: "ASK_USER",
    description: "Ask user for clarification",
    async execute(input) {
      return {
        question: input.question,
      };
    },
  };
}
