export default function AdminPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">User</th>
            <th className="border px-4 py-2">Service</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">Baby Sitting</td>
            <td className="border px-4 py-2">2026-02-05</td>
            <td className="border px-4 py-2">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
