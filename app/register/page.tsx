'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Link from 'next/link';

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/store';

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push(redirect);
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-black text-white font-geo">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form onSubmit={handleRegister} className="space-y-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 bg-neutral-800 border border-neutral-600 rounded text-white"
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-3 bg-neutral-800 border border-neutral-600 rounded text-white"
          required
        />
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
          Register
        </button>
        <p className="text-sm text-center text-neutral-400 mt-4">
          Already have an account?{' '}
          <Link href="/login" className="text-yellow-500 hover:underline font-bold">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Loading registration...</div>}>
      <RegisterForm />
    </Suspense>
  );
}