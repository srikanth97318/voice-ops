export default function TaskList({ tasks }) {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.title} — {t.status}
          </li>
        ))}
      </ul>
    </div>
  );
}