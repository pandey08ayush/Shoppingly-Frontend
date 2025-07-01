// components/HistoryPanel.jsx
export default function HistoryPanel({ history }) {
  return (
    <aside className="w-72 bg-white border-r px-4 py-6 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">History</h2>
      <ul className="space-y-3">
        {history.length === 0 && (
          <li className="text-gray-500">No history yet.</li>
        )}
        {history.map((text, index) => (
          <li key={index} className="text-sm bg-gray-100 p-2 rounded shadow-sm truncate">
            {text}
          </li>
        ))}
      </ul>
    </aside>
  );
}
