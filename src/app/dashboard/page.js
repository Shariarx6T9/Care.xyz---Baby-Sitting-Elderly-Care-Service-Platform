export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border p-6 rounded">
          <h2 className="font-semibold mb-2">Total Bookings</h2>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="border p-6 rounded">
          <h2 className="font-semibold mb-2">Active Services</h2>
          <p className="text-2xl font-bold">3</p>
        </div>
        <div className="border p-6 rounded">
          <h2 className="font-semibold mb-2">Pending Requests</h2>
          <p className="text-2xl font-bold">2</p>
        </div>
      </div>
    </div>
  );
}
