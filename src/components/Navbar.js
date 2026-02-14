"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-blue-600">
          Care.xyz
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          {user ? (
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              Login / Register
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
