"use client";

import PrivateRoute from "@/components/PrivateRoute";
import { useAuth } from "@/context/AuthContext";

export default function AdminPage() {
  const { role } = useAuth();

  if (role !== "admin") {
    return <p>Access denied</p>;
  }

  return (
    <PrivateRoute>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>

        <ul className="list-disc pl-6">
          <li>Manage Bookings</li>
          <li>Manage Users</li>
          <li>Service Overview</li>
        </ul>
      </div>
    </PrivateRoute>
  );
}
