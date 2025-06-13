'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

export default function withAuth(Component: any) {
  return function ProtectedRoute(props: any) {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) router.push('/login');
      });

      return () => unsubscribe();
    }, [router]);

    return <Component {...props} />;
  };
}