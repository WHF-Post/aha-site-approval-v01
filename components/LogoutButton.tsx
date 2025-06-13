'use client';

import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export function LogoutButton() {
  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = '/login'; // redirect after logout
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-white hover:text-yellow-400 transition"
    >
      Logout
    </button>
  );
}