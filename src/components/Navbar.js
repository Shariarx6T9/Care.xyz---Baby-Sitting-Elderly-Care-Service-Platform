"use client";

import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between">
        <Link href="/" className="font-bold text-lg">
          Care.xyz
        </Link>

        <div className="space-x-4">
          {user ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <button onClick={() => signOut(auth)} className="text-red-500">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
