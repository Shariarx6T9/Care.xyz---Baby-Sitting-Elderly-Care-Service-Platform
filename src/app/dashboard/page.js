"use client";

import PrivateRoute from "@/components/PrivateRoute";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <PrivateRoute>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Welcome, {user.email}</h2>
      </div>
    </PrivateRoute>
  );
}
