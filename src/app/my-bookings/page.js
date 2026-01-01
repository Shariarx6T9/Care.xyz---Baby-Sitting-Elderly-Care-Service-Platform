
"use client";
import { useEffect, useState } from "react";
import { getBookings } from "@/lib/bookingStorage";
import { useAuth } from "@/context/AuthContext";
import PrivateRoute from "@/components/PrivateRoute";

export default function MyBookings() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const all = getBookings();
    setBookings(all.filter(b => b.userEmail === user.email));
  }, [user]);

  return (
    <PrivateRoute>
      <div className="p-6">
        <h2 className="text-2xl">My Bookings</h2>
        {bookings.map(b => (
          <div key={b.id} className="border p-3 mt-2">
            <p>{b.service}</p>
            <p>{b.days} days</p>
            <p>৳{b.total}</p>
            <p>Status: {b.status}</p>
          </div>
        ))}
      </div>
    </PrivateRoute>
  );
}
