export default function BookingPage({ params }) {
  return (
    <div className="max-w-xl mx-auto py-16 px-6">
      <h1 className="text-2xl font-bold mb-6">
        Book Service: {params.id.replace("-", " ")}
      </h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded"
        />
        <input type="date" className="w-full border px-4 py-2 rounded" />
        <textarea
          placeholder="Additional notes"
          className="w-full border px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
