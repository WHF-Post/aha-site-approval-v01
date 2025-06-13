'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, firestore } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const userCred = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCred.user;

      await setDoc(doc(firestore, 'users', user.uid), {
        name: form.name,
        age: form.age,
        email: form.email,
        createdAt: serverTimestamp(),
      });

      router.push('/login');
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6 text-yellow-300">Register</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          className="w-full px-4 py-2 rounded bg-neutral-800 text-white"
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 rounded bg-neutral-800 text-white"
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 rounded bg-neutral-800 text-white"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 rounded bg-neutral-800 text-white"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded">
          Create Account
        </button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account?{' '}
        <Link href="/login" className="text-yellow-300 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}