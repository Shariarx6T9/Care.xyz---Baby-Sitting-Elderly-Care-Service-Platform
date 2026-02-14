"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Care.xyz
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>

          {user ? (
            <span className="text-gray-600">Hello, {user.email}</span>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Login / Register
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
