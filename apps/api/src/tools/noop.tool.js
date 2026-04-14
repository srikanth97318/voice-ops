export function noopTool() {
  return {
    name: "NOOP",
    description: "Do nothing",
    async execute() {
      return { status: "ignored" };
    },
  };
}