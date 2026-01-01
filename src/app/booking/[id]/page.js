
"use client";
import { useState } from "react";
import services from "@/data/services.json";
import PrivateRoute from "@/components/PrivateRoute";
import { saveBooking } from "@/lib/bookingStorage";
import { useAuth } from "@/context/AuthContext";

export default function Booking({ params }) {
  const service = services.find(s => s.id === params.id);
  const [days, setDays] = useState(1);
  const { user } = useAuth();

  const total = days * service.price;

  const handleBooking = () => {
    saveBooking({
      id: Date.now(),
      userEmail: user.email,
      service: service.name,
      days,
      total,
      status: "Pending"
    });
    alert("Booking Confirmed!");
  };

  return (
    <PrivateRoute>
      <div className="p-6">
        <h2>{service.name}</h2>
        <input type="number" min="1" value={days} onChange={e => setDays(Number(e.target.value))} />
        <p>Total: ৳{total}</p>
        <button onClick={handleBooking}>Confirm Booking</button>
      </div>
    </PrivateRoute>
  );
}
