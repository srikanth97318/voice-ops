export default function AgentDecisionView({ result }) {
  return (
    <div>
      <h2>Agent Output</h2>
      <p>{result.text}</p>
      <p>Confidence: {result.confidence}</p>
      <p>Success: {result.success}</p>
      <p>Request ID: {result.requestId}</p>
    </div>
  );
}