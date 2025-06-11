'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Link from 'next/link';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/store';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push(redirect);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-geo px-4">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form
        onSubmit={handleLogin}
        className="space-y-4 w-full max-w-sm"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-neutral-800 border border-neutral-600 rounded text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 bg-neutral-800 border border-neutral-600 rounded text-white"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded font-bold"
        >
          Login
        </button>

        <p className="text-sm text-center text-neutral-400 mt-4">
          Don’t have an account?{' '}
          <Link href="/register" className="text-yellow-500 hover:underline font-bold">
            Register
          </Link>
        </p>
      </form>
    </main>
  );
}