import { useEffect, useState } from "react";
import { fetchTasks, runAgent } from "../services/api.js";
import TaskList from "../components/TaskList.jsx";
import AgentDecisionView from "../components/AgentDecisionView.jsx";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [agentResult, setAgentResult] = useState(null);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  async function triggerAgent() {
    const result = await runAgent({
      transcript: "Create a task to review code tomorrow",
    });
    setAgentResult(result);
    fetchTasks().then(setTasks);
  }

  return (
    <div>
      <h1>VoiceOps Agent Dashboard</h1>
      <button onClick={triggerAgent}>Run Agent</button>
      {agentResult && <AgentDecisionView result={agentResult} />}
      <TaskList tasks={tasks} />
    </div>
  );
}