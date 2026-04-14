const API_BASE = import.meta.env.VITE_API_BASE || "/api";

export async function fetchTasks() {
  const res = await fetch(`${API_BASE}/tasks`);
  return res.json();
}

export async function runAgent(payload) {
  const res = await fetch(`${API_BASE}/agent/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return res.json();
}
``